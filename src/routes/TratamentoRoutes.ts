import { Router, Request, Response } from "express";

const tratamentoRoutes = Router()

tratamentoRoutes.post("/aviso", (req:Request, res:Response)=>{
    console.log("Aviso recebido")
    res.send("Aviso recebido")
})

export default tratamentoRoutes