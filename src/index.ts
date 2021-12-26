import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./auth/entity/user.entity";

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Admin",
  database: "nasser",
  entities: [User],
  synchronize: true,
})
  .then((connection) => {
    console.log("postgresql is connected...");
  })
  .catch((error) => console.log(error));
