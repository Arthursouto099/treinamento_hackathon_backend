import { IsOptional } from "class-validator";
import { CriarAdmDTO } from "./CriarAdmDTO";

export class AtualizarAdmDTO extends CriarAdmDTO {
  @IsOptional()
  novoNome: string;

  @IsOptional()
  senha: string;
}
