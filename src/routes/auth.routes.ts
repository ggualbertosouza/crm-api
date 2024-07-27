import authController from "@/controllers/auth.controller.js";
import { Router, Request, Response } from "express";
import "express-async-errors";

const authRouter = Router();
const controller = new authController();

authRouter.post("/signup", controller.create);

authRouter.get("/login", (req: Request, res: Response) => {
  res.send("login");
});

authRouter.get("/logout", (req: Request, res: Response) => {
  res.send("logout");
});

export default authRouter;
