import { Medicao } from "../entities/Medicao";
import { Parametro } from "../entities/Parametro";
import { TipoParametro } from "../entities/TipoParametro";
import MedicaoMongo from "../interfaces/MedicaoMongo";

class EstruturaMedicoes{
    estruturar(tipoParametros:TipoParametro[], medicao:MedicaoMongo){
        let listaMedicoesRelacionais:Medicao[] = []
        tipoParametros.forEach(tipoParametro => {
            console.log(tipoParametro)
            for(const chave in medicao.medicoes){
                if(chave.toUpperCase() == tipoParametro.nomeTipoParametro){
                    let medicaoRelacional = new Medicao()
                    medicaoRelacional.parametro = tipoParametro.parametros[0];
                    medicaoRelacional.unixTime = medicao.unix;
                    medicaoRelacional.valorMedida = medicao.medicoes[chave]
                    listaMedicoesRelacionais.push(medicaoRelacional)
                }
            }
        });
        return listaMedicoesRelacionais
    }
}

export default new EstruturaMedicoes()