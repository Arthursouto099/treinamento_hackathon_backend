import { NextFunction, Response, Request } from "express"
import z from "zod"


// usado para validar o schema do zod
function validateZodObject(schema: z.ZodType<any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const isSuccess = schema.safeParse(req.body)

        if (!isSuccess.success) {
            return res.status(400).json({
                message: isSuccess.error.issues[0].message,
                errors: isSuccess.error.issues.map((e) => ({
                    path: e.path,
                    message: e.message
                }))
            })
        }
        req.body = isSuccess
        next()
    }
}


export {
    validateZodObject
}