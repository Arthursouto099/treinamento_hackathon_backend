import { IsNotEmpty, Max, Min } from "class-validator";
import { sangue, Doador } from "../entities/doador";
export class DoadorDTO extends Doador {
  @IsNotEmpty({ message: "Nome deve estar presente" })
  nome: string;

  @IsNotEmpty({ message: "Senha deve estar presente" })
  senha: string;

  @IsNotEmpty({ message: "Idade deve estar presente" })
  @Min(18, { message: "Doador deve ser maior de idade" })
  @Max(69, { message: "Doador deve ter menos de 69 anos" })
  idade: number;

  @IsNotEmpty({ message: "Peso deve estar presente" })
  @Min(50, { message: "Peso mínimo de 50 Kilos" })
  peso: number;

  @IsNotEmpty({ message: "Tipo sanguínio deve estar presente" })
  tipo_sanguineo: sangue;

  @IsNotEmpty({ message: "Data da última doação deve estar presente" })
  data_ultima_doação: Date;
}
