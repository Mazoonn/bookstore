import {BookController as BookControllerC} from "./book.controller";
import {BaseRouter, BaseRouterModel} from "../../routs/route-model";

export class BookController {
    private BaseRouter = new BaseRouter();
    public get routes() {
        const BookController = new BookControllerC();
        this.BaseRouter.add(new BaseRouterModel('GET', '/book/list', BookController.getList));
        this.BaseRouter.add(new BaseRouterModel('POST', '/book/add', BookController.addBook));
        this.BaseRouter.add(new BaseRouterModel('DELETE', '/book/delete', BookController.deleteBook));
        return this.BaseRouter.router;
    }
}
