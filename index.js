import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3000;
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "bookreview",
    password: "put-your-password-here",
    port: 5432
});

db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await db.query("SELECT isbn, title, author, date(date_read), rating, summary, review FROM booklist ORDER BY rating DESC;");
        const booklist = result.rows;
        res.render("index.ejs",{books: booklist});
    } catch(err) {
        console.log(err);
    }
});

app.get("/details/:id", async (req, res) => {
    const isbn = req.params.id;
    try {
        const result = await db.query("SELECT isbn, title, author, date(date_read), rating, summary, review FROM booklist WHERE isbn = $1;", [isbn]);
        const book = result.rows;
        res.render("book.ejs", {book: book});
    } catch(err) {
        console.log(err);
    }
});

app.get("/sort-title", async (req, res) => {
    try {
        const result = await db.query("SELECT isbn, title, author, date(date_read), rating, summary, review FROM booklist ORDER BY title ASC;");
        const booklist = result.rows;
        res.render("index.ejs",{books: booklist});
    } catch {
        console.log(err);
    }
});

app.get("/sort-new", async (req, res) => {
    try {
        const result = await db.query("SELECT isbn, title, author, date(date_read), rating, summary, review FROM booklist ORDER BY date DESC;");
        const booklist = result.rows;
        res.render("index.ejs",{books: booklist});
    } catch(err) {
        console.log(err);
    }
});

app.get("/sort-rating", (req, res) => {
    res.redirect("/");
});

app.get("/search", async (req, res) => {
    const input = req.query["searchtitle"];
    try {
        const result = await db.query("SELECT isbn, title, author, date(date_read), rating, summary, review FROM booklist WHERE LOWER(title) LIKE '%'||$1||'%';", [input.toLowerCase()]);
        const booklist = result.rows;
        res.render("index.ejs",{books: booklist});
    } catch(err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`The server is running at port ${port}`);
});