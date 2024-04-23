import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Parametro } from "./Parametro";


@Entity()
export class Alerta {

    @PrimaryGeneratedColumn()
    idAlerta: number;

    @Column({nullable:false})
    nomeAlerta:string

    @Column({nullable:false})
    condicaoAlerta:string
    
    @Column({nullable:false, default:true})
    statusAlerta:boolean
    
    @Column({nullable:false})
    valorMedicaoAlerta:number

    @ManyToOne(()=>Parametro, parametro=>parametro.alertas)
    parametro:Parametro

}