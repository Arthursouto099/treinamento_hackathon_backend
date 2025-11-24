import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
export type sangue = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

@Entity("doador")
 class Doador {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false, length: 100 })
  nome: string;

  @Column({ nullable: false, length:11, unique: true })
  cpf: string;

  @Column({ nullable: false })
  idade: number;

  @Column({ nullable: false })
  peso: number;

  @Column({type: "varchar", nullable: false, length: 3 })
  tipo_sanguineo: sangue;

  @Column({ nullable: false })
  data_ultima_doacao: Date;
}

export default  Doador