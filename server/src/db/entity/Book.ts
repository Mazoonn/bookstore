import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
import { Genre } from './Genre';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    author: string;

    @Column()
    publicationDate: Date;

    @ManyToOne(() => Genre, genre => genre.books)
    genre: Genre;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;
}
