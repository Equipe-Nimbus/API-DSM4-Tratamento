import { Request, Response } from "express";
import PegaDadosMedicoes from "../services/PegaDadosMedicoes";
import TrataMedicao from "../services/TrataMedicao";
import MedicaoMongo from "../interfaces/MedicaoMongo";

class TratamentoController{

    async tratar(req:Request, res:Response){
        let medicoes = await PegaDadosMedicoes.pegar() as MedicaoMongo[]
        console.log("OQ FOI PEGO: ", medicoes)
        await TrataMedicao.tratar(medicoes)
        res.send("Aviso recebido")
    }

}

export default new TratamentoController()