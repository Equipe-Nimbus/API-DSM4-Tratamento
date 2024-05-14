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
                    if(medicao.parametro.idParametro == parametro.idParametro && parametro.alertas.length != 0){
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
        switch(alerta.condicaoAlerta){
            case "<":
                if (medicao.valorMedida < alerta.valorMedicaoAlerta) {
                    listaOcorrencia.push(EstruturaOcorrenciaAlerta.estruturar(alerta, medicao, estacao, tipoParametro))
                }; break;
            case "<=":
                if (medicao.valorMedida <= alerta.valorMedicaoAlerta) {
                    listaOcorrencia.push(EstruturaOcorrenciaAlerta.estruturar(alerta, medicao, estacao, tipoParametro))
                }; break;
            case "=":
                if (medicao.valorMedida == alerta.valorMedicaoAlerta) {
                    listaOcorrencia.push(EstruturaOcorrenciaAlerta.estruturar(alerta, medicao, estacao, tipoParametro))
                }; break;
            case ">=":
                if (medicao.valorMedida >= alerta.valorMedicaoAlerta) {
                    listaOcorrencia.push(EstruturaOcorrenciaAlerta.estruturar(alerta, medicao, estacao, tipoParametro))
                }; break;
            case ">":
                if (medicao.valorMedida > alerta.valorMedicaoAlerta) {
                    listaOcorrencia.push(EstruturaOcorrenciaAlerta.estruturar(alerta, medicao, estacao, tipoParametro))
                }; break;
        }
        return listaOcorrencia;
    }

}

export default new GeraListaOcorrenciaAlerta()