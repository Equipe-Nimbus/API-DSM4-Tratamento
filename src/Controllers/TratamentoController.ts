import { Request, Response } from "express";
import PegaDadosMedicoes from "../services/PegaDadosMedicoes";
import DeletaDadosMedicoes from "../services/DeletaDadosMedicoes";

class TratamentoController{

    async tratar(req:Request, res:Response){
        let medicoes = await PegaDadosMedicoes.pegar()
        console.log(medicoes);
        //await DeletaDadosMedicoes.deletar()
        res.send("Aviso recebido")
    }

}

export default new TratamentoController()