
import MedicaoMongo from "../interfaces/MedicaoMongo";
import AtualizaBateria from "./AtualizaBateria";
import ConfereExistenciaEstacao from "./ConfereExistenciaEstacao";
import ConfereMedicaoExistente from "./ConfereMedicaoExistente";
import DeletaDadosMedicoes from "./DeletaDadosMedicoes";
import EstruturaMedicoes from "./EstruturaMedicoes";
import InsereMedicoesNoRelacional from "./InsereMedicoesNoRelacional";
import InsereOcorrenciasAlerta from "./InsereOcorrenciasAlerta";
import PegaTipoParatros from "./PegaTipoParatros";

class TrataMedicao{
    async tratar(medicoes:MedicaoMongo[]){
        medicoes.forEach(async medicao => {
            const estacao = await ConfereExistenciaEstacao.conferir(medicao.idPlacaEstacao)
            if(estacao == undefined) return;
            const resultado = await AtualizaBateria.atualizar(medicao, estacao)
            if(resultado == "falha"){console.log("Requisição mal formulada"); return;}
            const tipoParametros = await PegaTipoParatros.pegar(estacao.idEstacao);
            if(tipoParametros == undefined) return;
            let medicoesEstruturadas = EstruturaMedicoes.estruturar(tipoParametros, medicao)
            medicoesEstruturadas = await ConfereMedicaoExistente.conferir(medicoesEstruturadas)
            if(medicoesEstruturadas.length == 0) return;
            const medicoesComId = await InsereMedicoesNoRelacional.inserir(medicoesEstruturadas);
            await InsereOcorrenciasAlerta.inserir(estacao, medicoesComId, tipoParametros)
        });
        await DeletaDadosMedicoes.deletar(medicoes);
    }
}

export default new TrataMedicao();