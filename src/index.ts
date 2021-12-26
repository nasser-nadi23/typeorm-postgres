import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./auth/entity/user.entity";
import dotenv from "dotenv";

dotenv.config();

createConnection({
  type: "postgres",
  port: 5432,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: true,
})
  .then((connection) => {
    console.log("postgresql is connected...");
  })
  .catch((error) => console.log(error));
