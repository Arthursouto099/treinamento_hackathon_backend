import express, { Application, Request, Response, NextFunction } from "express";
import { AppDataSource } from "./config/data-source";
//import router from "./routes/routes";

const app: Application = express();
const PORT = Number(process.env.PORT_SERVER) || 3000;

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction): void => {
  try {
    const { id } = req.params;
    if (id && isNaN(Number(id))) {
      res.status(400).send({ mensagem: "ID inválido!" });
    } else {
      next();
    }
  } catch (e) {
    next();
  }
});

//app.use(router);

app.use((req: Request, res: Response): void => {
  res.status(404).send({ mensagem: "Rota não encontrada!" });
});

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch((err:any) => console.error("Erro ao conectar no banco:", err));
