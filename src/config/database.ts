import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const connection = mysql.createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE,
  port: Number(process.env.PORT_DB),
});

export async function connect() {
  try {
    const conn = await connection.getConnection();
    console.log("Conectado ao banco de dados com ID " + connection.threadId);
    conn.release();
  } catch (error: any) {
    console.error("Erro ao conectar ao banco de dados:", error.stack);
  }
}



