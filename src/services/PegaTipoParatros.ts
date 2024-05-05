import PgDataSource from "../ConfigPostgres";
import { TipoParametro } from "../entities/TipoParametro";

class PegaTipoParatros{

    async pegar(uuid:string){
        const repositorioParametro = PgDataSource.getRepository(TipoParametro)
        const tipoParametros = await repositorioParametro
        .createQueryBuilder("tipo_parametro")
        .leftJoinAndSelect("tipo_parametro.parametros", "parametro")
        .where(`parametro.estacoesIdEstacao = :idEstacao AND parametro.tiposParametroIdTipoParametro = tipo_parametro.idTipoParametro AND tipo_parametro.statusTipoParametro = true AND parametro.statusParametro = true`, {idEstacao:uuid})
        .getMany();

        return tipoParametros
    }
}

export default new PegaTipoParatros()