import { Alerta } from "../entities/Alerta";
import { Estacao } from "../entities/Estacao";
import { Medicao } from "../entities/Medicao";
import { TipoParametro } from "../entities/TipoParametro";
import OcorrenciaAlertaMongo from "../interfaces/OcorrenciaAlerta";
import FormatandoDatas from "./FormatandoDatas";

class EstruturaOcorrenciaAlerta{

    estruturar(alerta:Alerta, medicao:Medicao, estacao:Estacao, tipoParametro:TipoParametro):OcorrenciaAlertaMongo{
        let ocorrenciaAlerta = {} as OcorrenciaAlertaMongo;
        const data = new Date((medicao.unixTime * 1000) - (3 * 60 * 60 * 1000));
        ocorrenciaAlerta.ano = data.getFullYear().toString();
        ocorrenciaAlerta.dia = data.getDate().toString();
        ocorrenciaAlerta.mes = FormatandoDatas.numeroMesParaString(data.getMonth());
        ocorrenciaAlerta.cidadeEstacao = estacao.cidadeEstacao;
        ocorrenciaAlerta.estadoEstacao = estacao.estadoEstacao;
        ocorrenciaAlerta.latitudeEstacao = estacao.latitudeEstacao;
        ocorrenciaAlerta.longitudeEstacao = estacao.longitudeEstacao;
        ocorrenciaAlerta.idEstacao = estacao.idEstacao;
        ocorrenciaAlerta.idAlerta = alerta.idAlerta;
        ocorrenciaAlerta.idTipoParametro = tipoParametro.idTipoParametro;
        ocorrenciaAlerta.nomeAlerta = alerta.nomeAlerta;
        ocorrenciaAlerta.nomeEstacao = estacao.nomeEstacao;
        ocorrenciaAlerta.nomeTipoParametro = tipoParametro.nomeTipoParametro
        ocorrenciaAlerta.medicao = (medicao.valorMedida * toFloat(tipoParametro.fatorTipoParametro)) + toFloat(tipoParametro.offsetTipoParametro)
        ocorrenciaAlerta.valorAlerta = alerta.valorMedicaoAlerta
        ocorrenciaAlerta.condicaoAlerta = alerta.condicaoAlerta;
        ocorrenciaAlerta.unixtime = medicao.unixTime;
        ocorrenciaAlerta.unidadeMedicao = tipoParametro.unidadeTipoParametro;
        return ocorrenciaAlerta
    }

}
function toFloat(value: string | number): number {
    return typeof value === 'string' ? parseFloat(value) : value;
}

export default new EstruturaOcorrenciaAlerta()