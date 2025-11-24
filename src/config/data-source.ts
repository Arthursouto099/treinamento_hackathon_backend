import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from "dotenv";

config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST_DB,
  port: Number(process.env.PORT_DB) || 3306,
  username: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE,
  entities: [],
  synchronize: false, //MUDAR PARA FINAL
  logging: true,
});
