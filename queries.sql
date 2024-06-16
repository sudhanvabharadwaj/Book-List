--1. Create a table to store the details of the books as follows: --
CREATE TABLE booklist (
	isbn bigint PRIMARY KEY,
	title TEXT,
	author TEXT,
	date_read DATE,
	rating numeric,
	summary text,
	review text
);

--2. Insert the required details of the books as below: --
INSERT INTO booklist (isbn, title, author, date_read, rating, summary, review)
VALUES (0061122416, 'The Alchemist', 'Paulo Coelho', '2021-09-09', 8.5, 'Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations.
Paulo Coelho''s masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago''s journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life''s path, and, most importantly, to follow our dreams.', 
'A beautifully written journey that hits all the crucial aspects of a fictional work. This book helped me get a lot of things in perspective when I was in a tough spot.');
--(Just change the values to insert new books accordingly)--