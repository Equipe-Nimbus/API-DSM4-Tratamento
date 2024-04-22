import { MongoClient, ServerApiVersion } from "mongodb";
import { config } from "dotenv";
config();

const uri = process.env.DB_URL_Medidas;

if(uri==undefined){
    throw new Error("URI do MongoDB não configurada no arquivo .env")
}

const MongoDBMedicoes = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

export default MongoDBMedicoes;