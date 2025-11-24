import { Router } from "express"
import {doador_router} from "./doador.router"

const router = Router()

router.use("/doador", doador_router  )


export default router

