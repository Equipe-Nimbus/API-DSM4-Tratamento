
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Parametro } from "./Parametro";


@Entity()
export class Medicao {

    @PrimaryGeneratedColumn()
    idMedicao: number;

    @Column("decimal", {nullable: false, precision: 5, scale: 2})
    valorMedida:number

    @Column({nullable: false})
    unixTime:number

    @Column({nullable: true})
    tagTemporal:string

    @ManyToOne(()=>Parametro, parametro=>parametro.medicoes)
    parametro:Parametro

}