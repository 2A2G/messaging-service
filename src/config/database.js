import dotenv from "dotenv";
dotenv.config();

const isAuth =
  process.env.DB_USER && process.env.DB_PASSWORD
    ? `${process.env.DB_USER}:${process.env.DB_PASSWORD}@`
    : "";
const authSource = process.env.DB_AUTH_SOURCE
  ? `?authSource=${process.env.DB_AUTH_SOURCE}`
  : "";

const dbUrl = `${process.env.DB_DRIVER}://${isAuth}${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}${authSource}`;

export { dbUrl };
