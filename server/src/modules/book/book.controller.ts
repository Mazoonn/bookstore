import logger from "../../../config/logger";
import {HttpStatusCodes} from "../../enums/http-status-codes";
import {BookService} from "./book.service";

export class BookController {
    static bookService:BookService
    constructor() {
        BookController.bookService = new BookService();
    }
   async getList(req, res) {
        logger.info(req.correlation_id,'BookController/getList - start');
        let filters;
        if (req.query?.filters){
            filters = req.query.filters
        }
        const list = await BookController.bookService.getList(filters)
       logger.info(req.correlation_id,'BookController/getList - end', list);
       return res.status(HttpStatusCodes.OK).send(list);
    }

   async addBook (req, res){
       logger.info(req.correlation_id,'BookController/addBook - start');
       if (!req?.body?.author || !req?.body?.description || !req?.body?.genre || !req?.body?.price || !req?.body?.publicationDate || !req?.body?.title){
           logger.error(req.correlation_id,'UserController/addBook - missing data');
           return res.status(HttpStatusCodes.BAD_REQUEST).send('missing data');
       }
       await BookController.bookService.addBook(req.body)
       logger.info(req.correlation_id,'BookController/addBook - end');
       return res.status(HttpStatusCodes.OK);
   }
   async deleteBook (req, res){
       logger.info(req.correlation_id,'BookController/deleteBook - start');
       if (!req?.body?.id){
           logger.error(req.correlation_id,'UserController/deleteBook - missing data');
           return res.status(HttpStatusCodes.BAD_REQUEST).send('missing data');
       }
       await BookController.bookService.deleteBook(req.body.id)
       logger.info(req.correlation_id,'BookController/deleteBook - end');
       return res.status(HttpStatusCodes.OK);
   }
}