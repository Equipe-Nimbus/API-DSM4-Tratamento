
import MedicaoMongo from "../interfaces/MedicaoMongo";
import AtualizaBateria from "./AtualizaBateria";
import ConfereExistenciaEstacao from "./ConfereExistenciaEstacao";
import ConfereMedicaoExistente from "./ConfereMedicaoExistente";
import DeletaDadosMedicoes from "./DeletaDadosMedicoes";
import EstruturaMedicoes from "./EstruturaMedicoes";
import InsereMedicoesNoRelacional from "./InsereMedicoesNoRelacional";
import PegaTipoParatros from "./PegaTipoParatros";

class TrataMedicao{
    async tratar(medicoes:MedicaoMongo[]){
        medicoes.forEach(async medicao => {
            const estacao = await ConfereExistenciaEstacao.conferir(medicao.uuid)
            console.log("Confere se estacao existe:", !(estacao == undefined))
            if(estacao == undefined) return;
            await AtualizaBateria.atualizar(medicao, estacao)
            const tipoParametros = await PegaTipoParatros.pegar(medicao.uuid)
            console.log("algum tipo parametro existe:", !(tipoParametros == undefined))
            if(tipoParametros == undefined) return;
            let medicoesEstruturadas = EstruturaMedicoes.estruturar(tipoParametros, medicao)
            medicoesEstruturadas = await ConfereMedicaoExistente.conferir(medicoesEstruturadas)
            console.log("Medições ainda não estão cadastradas:", !(medicoesEstruturadas.length == 0))
            if(medicoesEstruturadas.length == 0) return;
            await InsereMedicoesNoRelacional.inserir(medicoesEstruturadas).then(()=>
                console.log("inserido")
            );
        });
        await DeletaDadosMedicoes.deletar(medicoes);
    }
}

export default new TrataMedicao();