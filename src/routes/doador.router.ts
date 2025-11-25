import { Router } from "express"
import DoadorController from "../controllers/doador.controller"
import { validateZodObject } from "../schemas/validator/zod.validator"
import { createDoadorSchema, updateDoadorSchema } from "../schemas/doador.schema"


const router = Router()



router.get("/by", DoadorController.findOneProps)
router.get("/all", DoadorController.findAll)
router.get("/:id", DoadorController.findOneBy)
router.post("/", validateZodObject(createDoadorSchema), DoadorController.create)
router.put("/:id", validateZodObject(updateDoadorSchema),  DoadorController.update)
router.delete("/:id", DoadorController.delete)


export {router as doador_router}
