import PgDataSource from "../ConfigPostgres";
import { Estacao } from "../entities/Estacao";

class ConfereExistenciaEstacao{
    async conferir(idPlaca:string){
        const repositorioEstacao = PgDataSource.getRepository(Estacao)
        let estacao:Estacao
        try{
            estacao = await repositorioEstacao.findOne({where:{idPlacaEstacao:idPlaca}})
            return estacao
        } catch{
            return undefined
        }
    }
}

export default new ConfereExistenciaEstacao();