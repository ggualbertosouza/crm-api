import HttpException from "@/utils/excpetions/httpException.js";
import { NextFunction, Request, Response } from "express";

export const ErrorHandler = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status ?? 500;
  const message = err.message || "INTERNAL SERVER ERROR";
  return res.status(status).json({ message: message });
};
