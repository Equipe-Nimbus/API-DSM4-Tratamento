import { ObjectId } from "mongodb"
import { Estacao } from "../../../src/entities/Estacao"
import { Medicao } from "../../../src/entities/Medicao"
import { Parametro } from "../../../src/entities/Parametro"
import { TipoParametro } from "../../../src/entities/TipoParametro"
import MedicaoMongo from "../../../src/interfaces/MedicaoMongo"
import EstruturaMedicoes from "../../../src/services/EstruturaMedicoes"

let listaTipoParametro:TipoParametro[] = [
    {
        idTipoParametro: 2,
        nomeTipoParametro: 'CHUVA',
        unidadeTipoParametro: 'mm3',
        fatorTipoParametro: 1,
        offsetTipoParametro: 0,
        statusTipoParametro: true,
        parametros: [{
            idParametro: 3, statusParametro: true,
            alertas: [],
            tiposParametro: undefined,
            estacoes: new Estacao,
            medicoes: []
        }],
        estacoes: []
    },
    {
        idTipoParametro: 3,
        nomeTipoParametro: 'TEMPERATURA',
        unidadeTipoParametro: 'cº',
        fatorTipoParametro: 1,
        offsetTipoParametro: 0,
        statusTipoParametro: true,
        parametros: [{
            idParametro: 3, statusParametro: true,
            alertas: [],
            tiposParametro: undefined,
            estacoes: new Estacao,
            medicoes: []
        }],
        estacoes: []
    }
]

let medicao:MedicaoMongo = {
    _id: new ObjectId(),
    idPlacaEstacao: "32134",
    unix: 0,
    bateria: 0,
    medicoes: {}
}



describe("Testes de estruturacao de medidas para o relacional", ()=>{

    test("medição que não tem o tipo parametro condizente", ()=>{
        const listaMedicaoEstruturada = EstruturaMedicoes.estruturar(listaTipoParametro, medicao)
        expect(listaMedicaoEstruturada.length).toBe(0)
    })

    test("medição que tem o tipo parametro condizente", ()=>{
        medicao.medicoes["Chuva"] = 23.5
        medicao.medicoes["temperatura"] = 30
        medicao.medicoes["Teste"] = "oi"
        const listaMedicaoEstruturada = EstruturaMedicoes.estruturar(listaTipoParametro, medicao)
        expect(listaMedicaoEstruturada.length).toBe(2)
        expect(listaMedicaoEstruturada[0].valorMedida).toBe(23.5)
        expect(listaMedicaoEstruturada[1].valorMedida).toBe(30)
    })

})