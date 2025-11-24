import { AppDataSource } from "../config/data-source"
import Doador from "../entities/doador"

// arquivo so para testar se está funcionando
export async function createDoador ()  {
    const doadorDadaSource = AppDataSource.getRepository(Doador)


   const novoDoador =  doadorDadaSource.create({
        cpf: "142.555.159.99",
        nome: "Arthur Santos Tavares Souto",
        idade: 18,
        data_ultima_doacao: new Date(),
        tipo_sanguineo: "A+",
        peso: 80
    })

    await doadorDadaSource.save(novoDoador)
}



