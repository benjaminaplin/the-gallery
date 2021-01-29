import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import routes from "./routes";
import {User} from "./entity/User";

createConnection({
  type: "postgres",
  host:  "172.19.0.2",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "art-gallery",
  synchronize: false,
  logging: true,
  entities: [`${__dirname}/entity/*.ts`],
  migrations: [`${__dirname}/migration/*.ts`],
  // subscribers: [
  //    "src/subscriber/**/*.ts"
  // ],
  cli: {
     entitiesDir: "src/entity",
     migrationsDir: "src/migration",
     subscribersDir: "src/subscriber"
  }
}).then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    console.log("hey ho there", __dirname)
    // register express routes from defined application routes
    routes.forEach((route) => {
      route(app);
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // PORT is really 3000, but it's mapped to 3001 bc client is on 3000
    console.log("Express server has started on port 3001. Open http://localhost:3001/users to see results");

}).catch(error => console.log('***** DB CONNECTION ERROR', error));
