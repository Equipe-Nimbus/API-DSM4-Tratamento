import PgDataSource from "../ConfigPostgres";
import { Medicao } from "../entities/Medicao";

class InsereMedicoesNoRelacional {
    
    async inserir(medicoes:Medicao[]){
        const repositorioMedicao = PgDataSource.getRepository(Medicao)
        await repositorioMedicao.save(medicoes)
    }

}

export default new InsereMedicoesNoRelacional()