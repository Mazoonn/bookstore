import express = require('express');
import { middleWare } from './config/middleware';
import {AppDataSource} from "./src/db/data-source";
import {initRoutes} from "./src/routs";

const initMiddleware = (app:any, middleWares :any) => {
    try {
        middleWares.forEach(function(middle) {
            app.use(middle);
        });
    } catch (err) {
        console.error('Express: error init middleware. ', err);
        throw 'ERROR_BINDING_MIDDLEWARE';
    }
}

const initializeControllers = (app) =>{
    console.log('Express: start binding routes');
    initRoutes(app);
}

const initializeDbProviders = () =>{
    console.log('Express: start init sqlite providers');
    AppDataSource.initialize()
}

const listen = (app) => {
    const port = 3001
    app.listen(port, () => {
        if (typeof process.send == 'function') process.send('ready');
        console.log('Express: listening on port ' + port);
        console.log('Express: Server READY!!');
        return;
    });
}


const initializeMiddleware= (app) =>{
    console.log('Express: start middleware initialize:');
    // set default middleware
    initMiddleware(app, middleWare);
}


const init = (app:any) => {
    //init db providers
    initializeDbProviders();
    // //init middleware
    initializeMiddleware(app);
    // // init controllers
    initializeControllers(app);
    // run server
    listen(app);
}
const app = express()
init(app)

