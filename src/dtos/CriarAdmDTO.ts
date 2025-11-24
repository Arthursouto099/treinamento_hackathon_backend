import { IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";
import { Administrador } from "../entities/Administrador";

export class CriarAdmDTO extends Administrador {
  @IsNotEmpty({ message: "Nome deve estar presente" })
  @MinLength(3, { message: "Nome deve ter mais que 3 caracteres" })
  @MaxLength(50, { message: "Nome deve ter menos que 50 caracteres" })
  nome: string;

  @IsNotEmpty({ message: "Senha deve estar presente" })
  @Matches(/(?=.*[A-Z])/, {
    message: "Senha deve conter pelo menos uma letra maiúscula",
  })
  @Matches(/(?=.*\d)/, { message: "Senha deve conter pelo menos um número" })
  @Matches(/(?=.*[a-z])/, {
    message: "Senha deve conter pelo menos uma letra minúscula",
  })
  @MinLength(5, { message: "Senha deve ter no mínimo 5 caracteres" })
  @MaxLength(20, { message: "Senha deve ter no máximo 20 caracteres" })
  senha: string;
}
