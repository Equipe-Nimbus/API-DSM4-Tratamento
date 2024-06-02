import GeradorTagTemporal from "../../../src/services/GeradorTagTemporal"



describe("Testes de conversão", ()=>{


    test("Teste com unixtime de 2 de Junho de 2024", ()=>{
        const unixtime = 1717355275
        const tagTemporal = GeradorTagTemporal.gerar(unixtime)
        expect(tagTemporal).toBe("Junho 2024")
    })


    test("Teste com unixtime de 2 de Julho de 2019", ()=>{
        const unixtime = 1562094475
        const tagTemporal = GeradorTagTemporal.gerar(unixtime)
        expect(tagTemporal).toBe("Julho 2019")
    })

})

