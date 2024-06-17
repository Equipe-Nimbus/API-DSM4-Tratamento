import PgDataSource from "../ConfigPostgres";
import { Alerta } from "../entities/Alerta";
import { Parametro } from "../entities/Parametro";
import { TipoParametro } from "../entities/TipoParametro";

class PegaTipoParatros {

    async pegar(uuid: string) {

        const repositorioParametro = PgDataSource.getRepository(TipoParametro)
        const tipoParametros = await repositorioParametro
            .createQueryBuilder("tipo_parametro")
            .leftJoinAndSelect("tipo_parametro.parametros", "parametro")
            .leftJoinAndSelect("parametro.alertas", "alertas", "alertas.statusAlerta = true AND alertas.parametroIdParametro = parametro.idParametro")
            .where(`parametro.estacoesIdEstacao = :idEstacao AND parametro.tiposParametroIdTipoParametro = tipo_parametro.idTipoParametro AND tipo_parametro.statusTipoParametro = true AND parametro.statusParametro = true`, { idEstacao: uuid })
            .select(["tipo_parametro", "alertas", "parametro"])
            .getMany();
        return tipoParametros
    }



    async confereAlertas(uuid: string){
    const repositorioAlerta = PgDataSource.getRepository(Alerta)
    const resultado = await repositorioAlerta.count({ where: { parametro: { estacoes: { idEstacao: uuid } }, statusAlerta: true } })
    //console.log("CONTAGEM ALERTA:", resultado)
    if (resultado == 0) { return false; }
    return true
    }
}

export default new PegaTipoParatros()