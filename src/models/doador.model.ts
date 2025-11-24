import { MongoRepository } from "typeorm"
import { AppDataSource } from "../config/data-source"
import Doador from "../entities/doador"

type CreateDoadorInputs = Omit<Doador, "id">
type UpdateDoadorInputs = Partial<Omit<Doador, 'id'>>

class DoadorModel {
    private Doadorrepository: MongoRepository<Doador> = AppDataSource.getMongoRepository(Doador)

    async createDoador({ doador }: { doador: CreateDoadorInputs }) {
        try {
            const copy = { ...doador, data_ultima_doacao: new Date() }
            return await this.Doadorrepository.save(this.Doadorrepository.create(copy))
        }
        catch (e) {
            return e
        }
        
    }

    async updateDoador({id,doador}: {id:  string, doador:  UpdateDoadorInputs }) {
        try{
            const copy = {...doador, data_ultima_doacao: new Date()}
            await this.Doadorrepository.update(id, copy)
            return this.Doadorrepository.findOneBy({id})
            
        }
        catch(e) {
            return e
        }
    }

    

}
