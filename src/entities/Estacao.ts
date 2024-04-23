import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, JoinTable, OneToMany } from 'typeorm';
import { TipoParametro } from './TipoParametro';
import { Parametro } from './Parametro';

@Entity()
export class Estacao {
  @PrimaryGeneratedColumn("uuid")
  idEstacao: string;

  @Column({nullable:false, unique:true})
  nomeEstacao: string;

  @Column({nullable:false})
  ruaAvenidaEstacao: string;

  @Column({nullable:false})
  numeroEnderecoEstacao: string;

  @Column({nullable:false})
  bairroEstacao: string;

  @Column({nullable:false})
  cidadeEstacao: string;

  @Column({nullable:false})
  estadoEstacao: string;

  @Column({nullable:false})
  cepEstacao: string;

  @Column({ nullable:false, type: 'decimal', precision: 10, scale: 8 })
  latitudeEstacao: number;

  @Column({ nullable:false, type: 'decimal', precision: 11, scale: 8 })
  longitudeEstacao: number;

  @Column({nullable:false, default:true})
  statusEstacao: boolean;

  @ManyToMany(()=>TipoParametro, tipoParametros=>tipoParametros.estacoes)
  tipoParametros:TipoParametro[]

  @OneToMany(()=>Parametro, parametro=>parametro.estacoes, { eager: true, cascade: true })
  parametros:Parametro[]
}