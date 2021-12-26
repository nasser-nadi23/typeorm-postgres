"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./auth/entity/user.entity");
(0, typeorm_1.createConnection)({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Admin",
    database: "nasser",
    entities: [user_entity_1.User],
    synchronize: true,
})
    .then(function (connection) {
    console.log("postgresql is connected...");
})
    .catch(function (error) { return console.log(error); });
