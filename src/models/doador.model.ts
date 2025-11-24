import { MongoRepository, Repository } from "typeorm"
import { AppDataSource } from "../config/data-source"
import Doador from "../entities/doador"
import DoadorController from "../controllers/doador.controller"

type CreateDoadorInputs = Omit<Doador, "id">
type UpdateDoadorInputs = Partial<Omit<Doador, 'id'>>

class DoadorModel {
    private Doadorrepository: Repository<Doador> = AppDataSource.getRepository(Doador)


    async findAll() {
        return await this.Doadorrepository.find() 
    }

    async findByProp({key, value}: {key: string, value: string}) {
        const condition = {[key]: value}
        return await this.Doadorrepository.findOneBy(condition)
    }

    async findOne({id}: {id: string}) {
        return await this.Doadorrepository.findOneBy({id})
    }

    async createDoador({ doador }: { doador: CreateDoadorInputs }) {
        try {
            const copy = { ...doador, data_ultima_doacao: new Date() }
            return await this.Doadorrepository.save(this.Doadorrepository.create(copy))
        }
        catch (e) {
            throw e
        }
        
    }

    async updateDoador({id,doador}: {id:  string, doador:  UpdateDoadorInputs }) {
        try{
            const copy = {...doador, data_ultima_doacao: new Date()}
            await this.Doadorrepository.update(id, copy)
            return this.Doadorrepository.findOneBy({id})
            
        }
        catch(e) {
            throw e
        }
    }

    async deleteDoador({id}: {id: string}) {
        try {
            await this.Doadorrepository.delete({id})
        }
        catch(e) {
            throw e
        }
    }
    

}

const DoadorModelConstructor = new DoadorModel()

export { DoadorModelConstructor as DoadorModel}