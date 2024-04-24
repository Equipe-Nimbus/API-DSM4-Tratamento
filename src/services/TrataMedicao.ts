
import MedicaoMongo from "../interfaces/MedicaoMongo";
import ConfereExistenciaEstacao from "./ConfereExistenciaEstacao";
import ConfereMedicaoExistente from "./ConfereMedicaoExistente";
import DeletaDadosMedicoes from "./DeletaDadosMedicoes";
import EstruturaMedicoes from "./EstruturaMedicoes";
import InsereMedicoesNoRelacional from "./InsereMedicoesNoRelacional";
import PegaTipoParatros from "./PegaTipoParatros";

class TrataMedicao{
    async tratar(medicoes:any[]){
        medicoes.forEach(async medicao => {
            const estacao = await ConfereExistenciaEstacao.conferir(medicao.uuid)
            if(estacao == undefined) return;
            const tipoParametros = await PegaTipoParatros.pegar(medicao.uuid)
            if(tipoParametros == undefined) return;
            let medicoesEstruturadas = EstruturaMedicoes.estruturar(tipoParametros, medicao)
            medicoesEstruturadas = await ConfereMedicaoExistente.conferir(medicoesEstruturadas)
            console.log("DEPOIS DA CONFERENCIA", medicoesEstruturadas)
            if(medicoesEstruturadas.length == 0) return;
            await InsereMedicoesNoRelacional.inserir(medicoesEstruturadas);
        });
        await DeletaDadosMedicoes.deletar();
    }
}

export default new TrataMedicao();