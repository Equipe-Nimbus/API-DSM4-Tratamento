import { MongoClient, ServerApiVersion } from "mongodb";
import { config } from "dotenv";
config();


const uri = process.env.DB_URL_MONGO_BACK;

if(uri==undefined){
    throw new Error("URI do MongoDB não configurada no arquivo .env")
}

const MongoDBOcorrencia = new MongoClient(uri, {
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

export default MongoDBOcorrencia;