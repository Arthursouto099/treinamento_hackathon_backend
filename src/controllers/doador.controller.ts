
import { Request, NextFunction, Response } from "express";
import {DoadorModel} from "../models/doador.model";




class DoadorController {


    
    static async  findOneProps (req: Request, res: Response, next: NextFunction) {
        try {
            res.status(200).json({data: await DoadorModel.findByProp({key: String(req.query.key) , value: String(req.query.value)})})
        }
        catch(e) {
            
        }
    }

    static async findOneBy(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(200).json({ data: await DoadorModel.findOne({id: req.params.id}) })
        }
        catch (e) {
            next(e)
        }
    }

     static async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(200).json({ data: await DoadorModel.findAll() })
        }
        catch (e) {
            next(e)
        }
    }

   static  async create(req: Request, res: Response, next: NextFunction) {
        try {
            const doador = await DoadorModel.createDoador({ doador: req.body })
            res.status(201).json({ data: doador, message: "Doador criado com sucesso" })
        }
        catch (e) {
            next(e)
        }
    }

   static  async update(req: Request, res: Response, next: NextFunction) {
        try {
            const doador = await DoadorModel.updateDoador({ id: req.params.id, doador: req.body })
            res.status(200).json({ data: doador, message: "Doador editado com sucesso" })
        }
        catch (e) {
            next(e)
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            await DoadorModel.deleteDoador({ id: req.params.id })
            res.status(200).json({ message: "Doador deletado com sucesso" })
        }
        catch (e) {
            next(e)
        }
    }
}
export default DoadorController