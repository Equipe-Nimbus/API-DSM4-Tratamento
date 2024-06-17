import MongoDBMedicoes from "../ConfigMongoDBMedicoes";



class PegaDadosMedicoes{

    async pegar(){
        await MongoDBMedicoes.connect();
        const colecaoMedicao = MongoDBMedicoes.db("MedicoesNimbus").collection("MedicoesNimbus");
        let medicoes = await colecaoMedicao.find({}).toArray()
        await MongoDBMedicoes.close()
        console.log("testMedições: ", medicoes)
        return medicoes 
    }

}

export default new PegaDadosMedicoes()