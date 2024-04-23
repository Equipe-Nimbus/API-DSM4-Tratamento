
import MedicaoMongo from "../interfaces/MedicaoMongo";
import ConfereExistenciaEstacao from "./ConfereExistenciaEstacao";

class TrataMedicao{
    async tratar(medicoes:any[]){
        medicoes.forEach(async medicao => {
            const estacao = await ConfereExistenciaEstacao.conferir(medicao.uuid)
            if(estacao == undefined) return;
            //Resto do tratamento
        });
    }
}

export default new TrataMedicao();