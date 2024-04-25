import { ObjectId } from "mongodb";
import MongoDBMedicoes from "../ConfigMongoDBMedicoes";
import MedicaoMongo from "../interfaces/MedicaoMongo";

class DeletaDadosMedicoes{

    async deletar(listaMedicoes:MedicaoMongo[]){
        const listaDeItens: ObjectId[] = listaMedicoes.map(medicao => new ObjectId(medicao._id));
        await MongoDBMedicoes.connect()
        const colecaoMedicao = MongoDBMedicoes.db("MedicoesNimbus").collection("MedicoesNimbus");
        await colecaoMedicao.deleteMany({_id: { $in: listaDeItens }});
        await MongoDBMedicoes.close()
    }

}

export default new DeletaDadosMedicoes()