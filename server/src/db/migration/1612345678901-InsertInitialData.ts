import { MigrationInterface, QueryRunner } from 'typeorm';
import {Book, Genre} from "../entity";

export class InsertInitialData1612345678901 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Insert genres
        const genreRepository = await queryRunner.manager.getRepository(Genre);
        const genresData = [
            { name: 'Science Fiction' },
            { name: 'Satire' },
            { name: 'Drama' },
            { name: 'Mystery' }
        ];
        const insertedGenres = await genreRepository.save(genresData);

        // Insert books
        const bookRepository = await queryRunner.manager.getRepository(Book);
        const booksData = [
            {
                title: "The Hitchhiker's Guide to the Galaxy",
                description: "A comic science fiction series created by Douglas Adams.",
                author: "Douglas Adams",
                publicationDate: new Date("1979-10-12"),
                genre: insertedGenres.find(genre => genre.name === 'Science Fiction'),
                price: 12.99
            },
            {
                title: "1984",
                description: "A dystopian novel by George Orwell.",
                author: "George Orwell",
                publicationDate: new Date("1949-06-08"),
                genre: insertedGenres.find(genre => genre.name === 'Satire'),
                price: 9.99
            },
            {
                title: "To Kill a Mockingbird",
                description: "A novel by Harper Lee.",
                author: "Harper Lee",
                publicationDate: new Date("1960-07-11"),
                genre: insertedGenres.find(genre => genre.name === 'Drama'),
                price: 10.49
            },
            {
                title: "The Da Vinci Code",
                description: "A mystery thriller novel by Dan Brown.",
                author: "Dan Brown",
                publicationDate: new Date("2003-03-18"),
                genre: insertedGenres.find(genre => genre.name === 'Mystery'),
                price: 14.99
            },
            {
                title: "The Hitchhiker's Guide to the Galaxy",
                description: "A comic science fiction series created by Douglas Adams.",
                author: "Douglas Adams",
                publicationDate: new Date("1979-10-12"),
                genre: insertedGenres.find(genre => genre.name === 'Science Fiction'),
                price: 12.99
            },
            {
                title: "1984",
                description: "A dystopian novel by George Orwell.",
                author: "George Orwell",
                publicationDate: new Date("1949-06-08"),
                genre: insertedGenres.find(genre => genre.name === 'Satire'),
                price: 9.99
            },
            {
                title: "To Kill a Mockingbird",
                description: "A novel by Harper Lee.",
                author: "Harper Lee",
                publicationDate: new Date("1960-07-11"),
                genre: insertedGenres.find(genre => genre.name === 'Drama'),
                price: 10.49
            },
            {
                title: "The Da Vinci Code",
                description: "A mystery thriller novel by Dan Brown.",
                author: "Dan Brown",
                publicationDate: new Date("2003-03-18"),
                genre: insertedGenres.find(genre => genre.name === 'Mystery'),
                price: 14.99
            },
            {
                title: "Jurassic Park",
                description: "A science fiction novel by Michael Crichton.",
                author: "Michael Crichton",
                publicationDate: new Date("1990-11-20"),
                genre: insertedGenres.find(genre => genre.name === 'Science Fiction'),
                price: 11.99
            },
            {
                title: "Pride and Prejudice",
                description: "A romantic novel by Jane Austen.",
                author: "Jane Austen",
                publicationDate: new Date("1813-01-28"),
                genre: insertedGenres.find(genre => genre.name === 'Drama'),
                price: 8.99
            },
            {
                title: "It",
                description: "A horror novel by Stephen King.",
                author: "Stephen King",
                publicationDate: new Date("1986-09-15"),
                genre: insertedGenres.find(genre => genre.name === 'Drama'),
                price: 13.49
            }
        ];
        await bookRepository.save(booksData);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // You may need to implement rollback logic if needed
    }
}

