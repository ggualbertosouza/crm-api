import { SERVER } from "@/config/config.js";
import connectDb from "@/config/dbConnect.js";
import { ErrorHandler } from "@/middlewares/errorHandler.js";
import authRouter from "@/routes/auth.routes.js";

// Packages
import Express from "express";
import http from "node:http";

const app = Express();
app.use(Express.json());

// Rotas
app.use("/v1/auth", authRouter);

// Criando server
const server = http.createServer(app);
// Conectando bacno de dados
connectDb();

app.use(ErrorHandler);
server.listen(SERVER.port, () => {
  console.log(`Server rodando ${SERVER.hostname}:${SERVER.port}`);
});
