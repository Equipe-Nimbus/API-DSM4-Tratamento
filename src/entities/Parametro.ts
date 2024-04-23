import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TipoParametro } from "./TipoParametro";
import { Estacao } from "./Estacao";
import { Medicao } from "./Medicao";
import { Alerta } from "./Alerta";


@Entity()
export class Parametro {

    @PrimaryGeneratedColumn()
    idParametro: number;

    @OneToMany(()=>Alerta, alertas=>alertas.parametro)
    alertas:Alerta[]

    @ManyToOne(()=>TipoParametro, tipoParametros => tipoParametros.parametros)
    tiposParametro:Promise<TipoParametro>
    
    @ManyToOne(()=>Estacao, estacoes => estacoes.parametros)
    estacoes:Estacao

    @OneToMany(()=>Medicao, medicoes=>medicoes.parametro)
    medicoes:Medicao[]

    @Column({type: "boolean", default: true})
    statusParametro: Boolean;
}