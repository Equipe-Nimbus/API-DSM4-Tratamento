import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Parametro } from "./Parametro";
import { Estacao } from "./Estacao";
import { Alerta } from "./Alerta";


@Entity()
export class TipoParametro {
    @PrimaryGeneratedColumn()
    idTipoParametro: number;

    @Column({length: 50, nullable:false})
    nomeTipoParametro: string;

    @Column({length: 10, nullable:false})
    unidadeTipoParametro: string;

    @Column({type: "numeric", default: 1})
    fatorTipoParametro: number;
    
    @Column({type: "numeric", default: 0})
    offsetTipoParametro: number;
    
    @Column({type: "boolean", default: true})
    statusTipoParametro: boolean;

    @OneToMany(()=>Parametro, parametro=>parametro.tiposParametro, { eager: true })
    parametros:Parametro[]

    @ManyToMany(()=>Estacao, estacoes=>estacoes.tipoParametros)
    estacoes:Estacao[]

}