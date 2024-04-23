
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Parametro } from "./Parametro";


@Entity()
export class Medicao {

    @PrimaryGeneratedColumn()
    idMedicao: number;

    @Column({nullable: false})
    valorMedida:number

    @Column({nullable: false})
    unixTime:number

    @ManyToOne(()=>Parametro, parametro=>parametro.medicoes)
    parametro:Parametro

}