import {AppDataSource} from "../../db/data-source";
import {Book} from "../../db/entity";

export class BookService {
  async getList(filter:any) {
    const BookRepository = AppDataSource.getRepository(Book)
    const queryBuilder = BookRepository.createQueryBuilder('book')
      .leftJoinAndSelect('book.genre', 'genre');
    if (filter) {
      queryBuilder.where(filter);
    }
    return queryBuilder.getMany();
  }

  async addBook(data: any) {
    const BookRepository = AppDataSource.getRepository(Book)
    const newBook = BookRepository.create()
    newBook.price = data.price;
    newBook.description = data.description;
    newBook.genre = data.genre;
    newBook.author = data.author;
    newBook.publicationDate = new Date(data.publicationDate);
    newBook.title = data.title;
    return BookRepository.save(newBook)
  }

  async deleteBook(id: number) {
    const BookRepository = AppDataSource.getRepository(Book)
    return BookRepository.delete({id:id})
  }
}