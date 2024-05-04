import PgDataSource from "../ConfigPostgres";
import { Estacao } from "../entities/Estacao";
import MedicaoMongo from "../interfaces/MedicaoMongo";

class AtualizaBateria{

    async atualizar(medicao:MedicaoMongo, estacao:Estacao){
        const repositorioEstacao = PgDataSource.getRepository(Estacao)
        estacao.bateriaEstacao = medicao.bateria
        estacao.unixtimeBateriaEstacao = medicao.unix
        try{
            await repositorioEstacao.save(estacao)
            return "sucesso"
        } catch(error){
            return "falha"
        }
    }

}

export default new AtualizaBateria()