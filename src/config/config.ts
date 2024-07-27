import dotenv from "dotenv";

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT ? process.env.SERVER_PORT : 3333;

export const DB_CONNECT = process.env.DB_CONNECT || "";

export const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};
