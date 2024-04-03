import {UserController as UserControllerC} from "./user.controller";
import {BaseRouter, BaseRouterModel} from "../../routs/route-model";

export class UserController {
    private BaseRouter = new BaseRouter();
    public get routes() {
        const UserController = new UserControllerC();
        this.BaseRouter.add(new BaseRouterModel('GET', '/user/list', UserController.getList));
        this.BaseRouter.add(new BaseRouterModel('POST', '/user/create', UserController.create));
        this.BaseRouter.add(new BaseRouterModel('POST', '/user/login', UserController.login));
        return this.BaseRouter.router;
    }
}
