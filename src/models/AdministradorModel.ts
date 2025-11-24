import { AppDataSource } from "../config/data-source";
import { Administrador } from "../entities/Administrador";

export class AdministradorModel {
  private repo = AppDataSource.getRepository(Administrador);

  async create(data: { nome: string; senha: string }): Promise<boolean> {
    const admin = this.repo.create({ nome: data.nome, senha: data.senha });
    await this.repo.save(admin);

    return true;
  }
  async login(data: { nome: string; senha: string }): Promise<Administrador> {
    const admin = await this.repo.findOneBy({ nome: data.nome });
    if (!admin) throw new Error("Administrador não encontrado");

    const valid = true; //validação da senha
    if (!valid) throw new Error("Senha inválida");
    return admin;
  }
  async update(
    token: string,
    data: { nome: string; novoNome: string; senha: string }
  ) {
    let admin = await this.repo.findOneBy({ nome: data.nome });
    if (!admin) throw new Error("Administrador não encontrado");
    if (token != data.nome) throw new Error("Sem permissao");
    if (data.novoNome) admin.nome = data.novoNome;

    //cria nova senha hash
  }
}
