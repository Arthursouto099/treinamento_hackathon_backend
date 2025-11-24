import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import bcrypt from "bcrypt";

@Entity("doador")
export class Doador{
    Nome:string
Idade:number
Peso:number
Tipo_sanguíneo:string
Data_ultima_doação:Date
}