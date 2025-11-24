import { Router } from "express"
import DoadorController from "../controllers/doador.controller"


const router = Router()



router.get("/by", DoadorController.findOneProps)
router.get("/all", DoadorController.findAll)
router.get("/:id", DoadorController.findOneBy)
router.post("/", DoadorController.create)
router.put("/:id", DoadorController.update)
router.delete("/:id", DoadorController.delete)


export {router as doador_router}

