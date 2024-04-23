import { Request, Response } from "express";
import PegaDadosMedicoes from "../services/PegaDadosMedicoes";
import DeletaDadosMedicoes from "../services/DeletaDadosMedicoes";
import ConfereExistenciaEstacao from "../services/ConfereExistenciaEstacao";
import TrataMedicao from "../services/TrataMedicao";

class TratamentoController{

    async tratar(req:Request, res:Response){
        let medicoes = await PegaDadosMedicoes.pegar()
        console.log(medicoes);
        await TrataMedicao.tratar(medicoes)
        res.send("Aviso recebido")
    }

}

export default new TratamentoController()