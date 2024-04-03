import logger from "../../../config/logger";
import {HttpStatusCodes} from "../../enums/http-status-codes";
import {UserService} from "./user.service";

export class UserController {
    static userService:UserService
    constructor() {
        UserController.userService = new UserService();
    }
    async login(req, res){
        logger.info(req.correlation_id,'UserController/login - start');
        if (!req?.body?.email || !req?.body?.password){
            logger.error(req.correlation_id,'UserController/login - missing data');
            return res.status(HttpStatusCodes.BAD_REQUEST).send('missing data');
        }
        const loggedIn = await UserController.userService.login(req.body)
        if (!loggedIn){
            logger.warn(req.correlation_id,'UserController/login - incorrect password');
            return res.status(HttpStatusCodes.FORBIDDEN);
        }
        logger.info(req.correlation_id,'UserController/login - end', loggedIn);
        return res.status(HttpStatusCodes.OK).send(loggedIn);
    }

    async create(req, res){
        logger.info(req.correlation_id,'UserController/create - start');
        if (!req?.body?.firstName || !req?.body?.lastName || !req?.body?.password){
            logger.error(req.correlation_id,'UserController/create - error missing data', req?.body);
            return res.status(HttpStatusCodes.BAD_REQUEST).send('missing data');
        }
        const newUser = await UserController.userService.create(req.body)
        if (!newUser){
            return res.status(HttpStatusCodes.BAD_REQUEST).send('email exist');
        }
        logger.info(req.correlation_id,'UserController/create - end', newUser);
        return res.status(HttpStatusCodes.OK).send(newUser);
    }

    async getList(req, res) {
        logger.info(req.correlation_id,'UserController/getList - start');
        let filters;
        if (req.query?.filters){
            filters = req.query.filters
        }
        const list = await UserController.userService.getList(filters)
        logger.info(req.correlation_id,'UserController/getList - end', list);
        return res.status(HttpStatusCodes.OK).send(list);
    }
}