import { Router } from "express";

export class BaseRouter {
    router: Router;
    constructor() {
        this.router = Router();
    }

    add(new_router: BaseRouterModel): void {
        try {
            this.router[new_router.method.toLowerCase()](new_router.path, async function (req, res, next) { await new_router.controller(req, res, next); next() });
            console.log("Binding route: ", new_router.path);
        } catch (err) {
            console.error("Error binding route:", new_router.path);
        }
    }
}

export class BaseRouterModel {
    method: 'GET' | 'PUT' | 'POST' | 'DELETE';
    path: string;
    controller: any;

    constructor(method: 'GET' | 'PUT' | 'POST' | 'DELETE', path: string, controller: any,options?: {
        [symbol: string]: string | number | boolean;
    }) {
        this.method = method || null;
        this.path = path || null;
        this.controller = controller || null;
    }
}
