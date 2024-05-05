import PgDataSource from "../ConfigPostgres";
import { Estacao } from "../entities/Estacao";

class ConfereExistenciaEstacao{
    async conferir(uuid:string){
        const repositorioEstacao = PgDataSource.getRepository(Estacao)
        let estacao:Estacao
        try{
            estacao = await repositorioEstacao.findOne({where:{idEstacao:uuid}})
            return estacao
        } catch{
            return undefined
        }
    }
}

export default new ConfereExistenciaEstacao();