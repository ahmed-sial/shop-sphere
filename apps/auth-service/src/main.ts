import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';
import { errorMiddleware } from '../../../packages/error-handler/error-handler.middleware';
import cookieParser from 'cookie-parser';
dotenv.config();

const port = process.env.PORT ? Number(process.env.PORT) : 8080;

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use(errorMiddleware);

const server = app.listen(port, () => {
  console.log(
    chalk.gray(`[ auth-service ] Listening at http://localhost:${port}/api/`),
  );
});
server.on('error', (err) =>
  console.error(chalk.red(`[ auth-service ] Server error: ${err}`)),
);
