"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./auth/entity/user.entity");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(0, typeorm_1.createConnection)({
    type: "postgres",
    port: 5432,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [user_entity_1.User],
    synchronize: true,
})
    .then(function (connection) {
    console.log("postgresql is connected...");
})
    .catch(function (error) { return console.log(error); });
