import MongoDBMedicoes from "../ConfigMongoDBMedicoes";

class DeletaDadosMedicoes{

    async deletar(){
        await MongoDBMedicoes.connect()
        const colecaoMedicao = MongoDBMedicoes.db("MedicoesNimbus").collection("MedicoesNimbus");
        await colecaoMedicao.deleteMany({});
    }

}

export default new DeletaDadosMedicoes()