import { Medicao } from "../entities/Medicao";
import { Parametro } from "../entities/Parametro";
import { TipoParametro } from "../entities/TipoParametro";
import MedicaoMongo from "../interfaces/MedicaoMongo";
import GeradorTagTemporal from "./GeradorTagTemporal";

class EstruturaMedicoes{
    estruturar(tipoParametros:TipoParametro[], medicao:MedicaoMongo):Medicao[]{
        let listaMedicoesRelacionais:Medicao[] = []
        tipoParametros.forEach(tipoParametro => {
            for(const chave in medicao.medicoes){
                if(chave.toUpperCase() == tipoParametro.nomeTipoParametro){
                    let medicaoRelacional = new Medicao()
                    medicaoRelacional.parametro = tipoParametro.parametros[0];
                    medicaoRelacional.unixTime = medicao.unix;
                    medicaoRelacional.tagTemporal = GeradorTagTemporal.gerar(medicao.unix)
                    medicaoRelacional.valorMedida = medicao.medicoes[chave]
                    listaMedicoesRelacionais.push(medicaoRelacional)
                }
            }
        });
        return listaMedicoesRelacionais
    }
}

export default new EstruturaMedicoes()