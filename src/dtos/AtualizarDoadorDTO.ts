import { IsOptional } from "class-validator";
import { sangue } from "../entities/doador";
import { CriarDoadorDTO } from "./CriarDoadorDTO";

export class AtualizarDoadorDTO extends CriarDoadorDTO {
  @IsOptional()
  nome: string;

  @IsOptional()
  cpf: string;

  @IsOptional()
  idade: number;

  @IsOptional()
  peso: number;

  @IsOptional()
  tipo_sanguineo: sangue;

  @IsOptional()
  data_ultima_doacao: Date;
}
