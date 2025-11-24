import { Column, Entity, PrimaryColumn } from "typeorm";
import bcrypt from "bcrypt";

@Entity("administrador")
export class Administrador {
  @PrimaryColumn({ nullable: false, length: 100, unique: true })
  nome: string;

  @Column({ nullable: false, length: 100 })
  senha: string;
}
