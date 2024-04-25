import PgDataSource from "../ConfigPostgres";
import { Estacao } from "../entities/Estacao";
import MedicaoMongo from "../interfaces/MedicaoMongo";

class AtualizaBateria{

    async atualizar(medicao:MedicaoMongo, estacao:Estacao){
        const repositorioEstacao = PgDataSource.getRepository(Estacao)
        estacao.bateriaEstacao = medicao.bateria
        estacao.unixtimeBateriaEstacao = medicao.unix
        await repositorioEstacao.save(estacao)
    }

}

export default new AtualizaBateria()