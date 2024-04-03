import { Application } from "express";
import {BookController} from "../modules/book/book.routs";
import {UserController} from "../modules/user/user.routs";

export function initRoutes(app: Application): void {
    app.use('/api/', new BookController().routes);
    app.use('/api/', new UserController().routes);
}