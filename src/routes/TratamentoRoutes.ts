import { Router, Request, Response } from "express";
import TratamentoController from "../Controllers/TratamentoController";

const tratamentoRoutes = Router()

tratamentoRoutes.post("/aviso", TratamentoController.tratar)

export default tratamentoRoutes