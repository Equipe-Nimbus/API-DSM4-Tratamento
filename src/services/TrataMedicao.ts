
import MedicaoMongo from "../interfaces/MedicaoMongo";
import ConfereExistenciaEstacao from "./ConfereExistenciaEstacao";
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
            const medicoesEstruturadas = EstruturaMedicoes.estruturar(tipoParametros, medicao)
            await InsereMedicoesNoRelacional.inserir(medicoesEstruturadas);
        });
        await DeletaDadosMedicoes.deletar();
    }
}

export default new TrataMedicao();