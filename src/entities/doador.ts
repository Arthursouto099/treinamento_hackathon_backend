import { Entity, Column } from "typeorm";
import bcrypt from "bcrypt";

export type sangue = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

@Entity("doador")
export class Doador {
  @Column({ nullable: false, length: 100 })
  nome: string;

  @Column({ nullable: false, length: 100 })
  cpf: string;

  @Column({ nullable: false })
  idade: number;

  @Column({ nullable: false })
  peso: number;

  @Column({ nullable: false, length: 3 })
  tipo_sanguineo: sangue;

  @Column({ nullable: false })
  data_ultima_doacao: Date;
}
