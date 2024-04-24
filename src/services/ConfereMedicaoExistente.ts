import PgDataSource from "../ConfigPostgres";
import { Medicao } from "../entities/Medicao";

class ConfereMedicaoExistente{

    async conferir(medicoesEstruturadas:Medicao[]){
        const repositorioMedicao = PgDataSource.getRepository(Medicao)
        let listaFinal:Medicao[]=[]
        console.log("ANTES da conferencia", medicoesEstruturadas)
        for (const medicao of medicoesEstruturadas) {
            const resultado = await repositorioMedicao.findOne({where: {unixTime: medicao.unixTime, valorMedida: medicao.valorMedida, parametro: medicao.parametro}})
            if (resultado == null)
                listaFinal.push(medicao)
        }
        return listaFinal
    }

}

export default new ConfereMedicaoExistente()