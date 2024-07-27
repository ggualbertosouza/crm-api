import UserModel from "@/models/user.model.js";
import BadRequest from "@/utils/excpetions/BadRequest.js";
import { Request, Response } from "express";

class authController {
  async create(req: Request, res: Response) {
    const data = req.body;

    const user = await UserModel.create(data);

    if (!user) {
      throw new BadRequest("Something went wrong!");
    }
    
    res.status(201).json(user);
  }
}
export default authController;
