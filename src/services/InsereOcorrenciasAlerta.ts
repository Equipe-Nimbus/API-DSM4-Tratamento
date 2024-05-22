import MongoDBOcorrencia from "../ConfigMongoDBOcorrencia";
import { Estacao } from "../entities/Estacao";
import { Medicao } from "../entities/Medicao";
import { TipoParametro } from "../entities/TipoParametro";
import GeraListaOcorrenciaAlerta from "./GeraListaOcorrenciaAlerta";

class InsereOcorrenciasAlerta{

    async inserir(estacao:Estacao, medicoes:Medicao[], tipoParametro:TipoParametro[]){
        const listaOcorrencias = GeraListaOcorrenciaAlerta.criarListaOcorrencia(estacao, medicoes, tipoParametro)
        console.log("Lista ocorrencias: ",listaOcorrencias)

        if (listaOcorrencias.length === 0) {
            return 'Não há alertas para inserir.';
        }

        await MongoDBOcorrencia.connect().then(async()=>{
            const colecaoOcorrencia = MongoDBOcorrencia.db("BackNimbusNaoRelacional").collection("OcorrenciaAlertas")
            await colecaoOcorrencia.insertMany(listaOcorrencias);
        }).finally(async()=>{
            await MongoDBOcorrencia.close()
        })
    }

}

export default new InsereOcorrenciasAlerta()