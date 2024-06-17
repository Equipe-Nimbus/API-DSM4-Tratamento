import { Alerta } from "../entities/Alerta";
import { Estacao } from "../entities/Estacao";
import { Medicao } from "../entities/Medicao";
import { TipoParametro } from "../entities/TipoParametro";
import OcorrenciaAlertaMongo from "../interfaces/OcorrenciaAlerta";
import EstruturaOcorrenciaAlerta from "./EstruturaOcorrenciaAlerta";

class GeraListaOcorrenciaAlerta{
    criarListaOcorrencia(estacao:Estacao, medicoes:Medicao[], tipoParametro:TipoParametro[]){
        let listaOcorrencia:OcorrenciaAlertaMongo[] = []
        medicoes.forEach(medicao => {
            tipoParametro.forEach(tipoParametroSelecionado => {
                tipoParametroSelecionado.parametros.forEach(parametro=>{
                    if(medicao.parametro.idParametro == parametro.idParametro && parametro.alertas){
                        parametro.alertas.forEach(alerta=>{
                            const resultado = this.comparacao(estacao, alerta, medicao, tipoParametroSelecionado)
                            listaOcorrencia.push(...resultado)
                        })
                    }
                })
            });
        });
        return listaOcorrencia
    }



    comparacao(estacao:Estacao, alerta:Alerta, medicao:Medicao, tipoParametro:TipoParametro){
        let listaOcorrencia:OcorrenciaAlertaMongo[] = []
        const fator = toFloat(tipoParametro.fatorTipoParametro);
        const offset = toFloat(tipoParametro.offsetTipoParametro);
        const medicaoCorrigida:number = (medicao.valorMedida*fator) + offset
        console.log("FATOR:", tipoParametro.fatorTipoParametro, typeof(tipoParametro.fatorTipoParametro), "OFFSET:", tipoParametro.offsetTipoParametro, typeof(tipoParametro.offsetTipoParametro), "ORIGINAL:", medicao.valorMedida, typeof(medicao.valorMedida),"MEDICAO CORRIGIDA:", medicaoCorrigida, "MEDICAO ALERTA:", alerta.valorMedicaoAlerta)
        switch(alerta.condicaoAlerta){
            case "<":
                if (medicaoCorrigida < alerta.valorMedicaoAlerta) {
                    listaOcorrencia.push(EstruturaOcorrenciaAlerta.estruturar(alerta, medicao, estacao, tipoParametro))
                }; break;
            case "<=":
                if (medicaoCorrigida <= alerta.valorMedicaoAlerta) {
                    listaOcorrencia.push(EstruturaOcorrenciaAlerta.estruturar(alerta, medicao, estacao, tipoParametro))
                }; break;
            case "=":
                if (medicaoCorrigida == alerta.valorMedicaoAlerta) {
                    listaOcorrencia.push(EstruturaOcorrenciaAlerta.estruturar(alerta, medicao, estacao, tipoParametro))
                }; break;
            case ">=":
                if (medicaoCorrigida >= alerta.valorMedicaoAlerta) {
                    listaOcorrencia.push(EstruturaOcorrenciaAlerta.estruturar(alerta, medicao, estacao, tipoParametro))
                }; break;
            case ">":
                if (medicaoCorrigida > alerta.valorMedicaoAlerta) {
                    listaOcorrencia.push(EstruturaOcorrenciaAlerta.estruturar(alerta, medicao, estacao, tipoParametro))
                }; break;
        }
        return listaOcorrencia;
    }

}

function toFloat(value: string | number): number {
    return typeof value === 'string' ? parseFloat(value) : value;
}


export default new GeraListaOcorrenciaAlerta()