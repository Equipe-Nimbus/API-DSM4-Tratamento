import { Request, Response } from "express";
import PegaDadosMedicoes from "../services/PegaDadosMedicoes";
import TrataMedicao from "../services/TrataMedicao";
import MedicaoMongo from "../interfaces/MedicaoMongo";
import PgDataSource from "../ConfigPostgres";
import DeletaDadosMedicoes from "../services/DeletaDadosMedicoes";


class TratamentoController{

    async tratar(req:Request, res:Response){
        let medicoes = await PegaDadosMedicoes.pegar() as MedicaoMongo[]
        try {
            console.log("OQ FOI PEGO: ", medicoes)
            await TrataMedicao.tratar(medicoes)
            await DeletaDadosMedicoes.deletar(medicoes);
            res.send("Aviso recebido")
        } catch (error) {
            if(error.tipo === "Deleção"){
                res.status(500).send("Erro na Deleção")
                await DeletaDadosMedicoes.deletar(medicoes)
            }
            else{
                res.status(500).send("Erro no tratamento")
            }
        }
    }

}

export default new TratamentoController()