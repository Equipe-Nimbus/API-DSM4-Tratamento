import PgDataSource from "../ConfigPostgres";
import { Medicao } from "../entities/Medicao";

class InsereMedicoesNoRelacional {
    
    async inserir(medicoes:Medicao[]){
        const repositorioMedicao = PgDataSource.getRepository(Medicao)
        let medicoesComId = await repositorioMedicao.save(medicoes)
        return medicoesComId
    }

}

export default new InsereMedicoesNoRelacional()