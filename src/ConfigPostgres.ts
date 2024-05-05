import { DataSource } from "typeorm";
import { config } from "dotenv";
config();

const DB_URL = process.env.DB_URL_Postgres;

const PgDataSource = new DataSource({
    //DB online elephantSQL
    database: 'bqlvykqu',
    url:DB_URL,

    //DB Local
    // database: "nimbusDB",
    // host: "localhost",
    // username: "postgres",
    // port: 5432,
    // password: "SuaSenha",
    type: "postgres", // se for SQLite, então use sqlite
    synchronize: true,
    logging: false, // true indica que as consultas e erros serão exibidas no terminal
    entities: ["src/entities/*.ts"], // entidades que serão convertidas em tabelas
    migrations: ["src/migrations/*.ts"] // local onde estarão os arquivos de migração
});



PgDataSource.initialize()
    .then(() => {
        console.log("Data Source inicializado!")
    })
    .catch((e) => {
        console.error("Erro na inicialização do Data Source:", e)
    });

export default PgDataSource;