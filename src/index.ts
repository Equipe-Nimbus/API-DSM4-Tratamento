import express from "express";
import { config } from 'dotenv';
import tratamentoRoutes from "./routes/TratamentoRoutes";
import cors from "cors";
import PgDataSource from "./ConfigPostgres";

config();
const app = express();
app.use(express.json());
const corsOptions = {
    origin: ['http://recepcao:8001'],
    optionsSuccessStatus: 200 
  };
  
app.use(cors(corsOptions));


app.use("/tratamento", tratamentoRoutes)

const PORT = 8002;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});