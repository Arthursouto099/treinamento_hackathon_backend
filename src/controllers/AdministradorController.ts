import { Request, Response } from "express";
import { AdministradorModel } from "../models/AdministradorModel";

const model = new AdministradorModel();
export class AdministradorController {
  async create(req: Request, res: Response) {
    try {
      const admin = await model.create(req.body);
      if (!admin) throw new Error();
      res.status(201).json({ message: "Administrador criado com successo" });
    } catch (e: any) {
      res.status(400).json({ message: "Falha ao criar novo administrador" });
    }
  }
  async login(req: Request, res: Response) {
    try {
      const admin = model.login(req.body);
      //criar novo token
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const admin = model.update("token", req.body);
      
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  }
}
