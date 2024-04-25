import PgDataSource from "../ConfigPostgres";
import { Medicao } from "../entities/Medicao";

class ConfereMedicaoExistente{

    async conferir(medicoesEstruturadas:Medicao[]){
        const repositorioMedicao = PgDataSource.getRepository(Medicao)
        let listaFinal:Medicao[]=[]
        for (const medicao of medicoesEstruturadas) {
            const resultado = await repositorioMedicao.findOne({where: {unixTime: medicao.unixTime, valorMedida: medicao.valorMedida, parametro: medicao.parametro}})
            const jaEstaNaLista = listaFinal.find(medicaoDaLista => {(medicaoDaLista.unixTime == medicao.unixTime && medicaoDaLista.valorMedida == medicao.valorMedida && medicaoDaLista.parametro == medicao.parametro) && listaFinal.length != 0})
            if (resultado == null && jaEstaNaLista == undefined)
                listaFinal.push(medicao)
        }
        return listaFinal
    }

}

export default new ConfereMedicaoExistente()