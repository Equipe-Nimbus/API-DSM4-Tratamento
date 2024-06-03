import GeradorTagTemporal from "../../../src/services/GeradorTagTemporal"



describe("Testes de conversão", ()=>{


    test("Teste com unixtime de 2 de Junho de 2024", ()=>{
        const unixtime = 1717355275
        let data = new Date(unixtime * 1000)
        data.setDate(1)
        data.setHours(0, 0, 0, 0);
        const novoUnix = Math.floor(data.getTime() / 1000)
        const tagTemporal = GeradorTagTemporal.gerar(unixtime)
        expect(tagTemporal).toBe(novoUnix)
    })


    test("Teste com unixtime de 2 de Julho de 2019", ()=>{
        const unixtime = 1562094475
        let data = new Date(unixtime * 1000)
        data.setDate(1)
        data.setHours(0, 0, 0, 0);
        const novoUnix = Math.floor(data.getTime() / 1000)
        const tagTemporal = GeradorTagTemporal.gerar(unixtime)
        expect(tagTemporal).toBe(novoUnix)
    })

})

