import "reflect-metadata"
import { DataSource } from "typeorm"
import { Book, Genre } from "./entity"
import {InsertInitialData1612345678901} from "./migration/1612345678901-InsertInitialData";
import {User} from "./entity/User";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    subscribers: [],
    entities: [Book, Genre, User],
    migrationsRun: true,
    migrations: [InsertInitialData1612345678901],
})
