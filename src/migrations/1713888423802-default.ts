import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1713888423802 implements MigrationInterface {
    name = 'Default1713888423802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "estacao" ("idEstacao" SERIAL NOT NULL, "codigoIdentificacao" character varying NOT NULL, "nomeEstacao" character varying NOT NULL, "ruaAvenidaEstacao" character varying NOT NULL, "numeroEnderecoEstacao" character varying NOT NULL, "bairroEstacao" character varying NOT NULL, "cidadeEstacao" character varying NOT NULL, "estadoEstacao" character varying NOT NULL, "cepEstacao" character varying NOT NULL, "latitudeEstacao" numeric(10,8) NOT NULL, "longitudeEstacao" numeric(11,8) NOT NULL, "statusEstacao" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_4a968b6072311f7453bbf13238c" UNIQUE ("codigoIdentificacao"), CONSTRAINT "UQ_17f90c0633c506c4546147b03c3" UNIQUE ("nomeEstacao"), CONSTRAINT "PK_8cdefb357d46ad4796ccfc318b8" PRIMARY KEY ("idEstacao"))`);
        await queryRunner.query(`CREATE TABLE "medicao" ("idMedicao" SERIAL NOT NULL, "valorMedida" integer NOT NULL, "unixTime" integer NOT NULL, "parametroIdParametro" integer, CONSTRAINT "PK_79ab77cd50662c9a759c24636d3" PRIMARY KEY ("idMedicao"))`);
        await queryRunner.query(`CREATE TABLE "alerta" ("idAlerta" SERIAL NOT NULL, "nomeAlerta" character varying NOT NULL, "condicaoAlerta" character varying NOT NULL, "statusAlerta" boolean NOT NULL DEFAULT true, "valorMedicaoAlerta" integer NOT NULL, "parametroIdParametro" integer, CONSTRAINT "PK_9f724d3814ec2e0fbef5e86447c" PRIMARY KEY ("idAlerta"))`);
        await queryRunner.query(`CREATE TABLE "parametro" ("idParametro" SERIAL NOT NULL, "statusParametro" boolean NOT NULL DEFAULT true, "tiposParametroIdTipoParametro" integer, "estacoesIdEstacao" integer, CONSTRAINT "PK_869d57f0b4155ce770e961a9e76" PRIMARY KEY ("idParametro"))`);
        await queryRunner.query(`CREATE TABLE "tipo_parametro" ("idTipoParametro" SERIAL NOT NULL, "nomeTipoParametro" character varying(50) NOT NULL, "unidadeTipoParametro" character varying(10) NOT NULL, "fatorTipoParametro" numeric NOT NULL DEFAULT '1', "offsetTipoParametro" numeric NOT NULL DEFAULT '0', "statusTipoParametro" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_07a319369cb4655a65b187b0b87" PRIMARY KEY ("idTipoParametro"))`);
        await queryRunner.query(`ALTER TABLE "medicao" ADD CONSTRAINT "FK_cb4591a92cbc93afecdf413a56a" FOREIGN KEY ("parametroIdParametro") REFERENCES "parametro"("idParametro") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alerta" ADD CONSTRAINT "FK_2c3ca2bbb858268f60f5e72308d" FOREIGN KEY ("parametroIdParametro") REFERENCES "parametro"("idParametro") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parametro" ADD CONSTRAINT "FK_7e46bb1f8e2a0e016a531ad68ac" FOREIGN KEY ("tiposParametroIdTipoParametro") REFERENCES "tipo_parametro"("idTipoParametro") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parametro" ADD CONSTRAINT "FK_21b8ab74bacc32843f540a4a2c4" FOREIGN KEY ("estacoesIdEstacao") REFERENCES "estacao"("idEstacao") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parametro" DROP CONSTRAINT "FK_21b8ab74bacc32843f540a4a2c4"`);
        await queryRunner.query(`ALTER TABLE "parametro" DROP CONSTRAINT "FK_7e46bb1f8e2a0e016a531ad68ac"`);
        await queryRunner.query(`ALTER TABLE "alerta" DROP CONSTRAINT "FK_2c3ca2bbb858268f60f5e72308d"`);
        await queryRunner.query(`ALTER TABLE "medicao" DROP CONSTRAINT "FK_cb4591a92cbc93afecdf413a56a"`);
        await queryRunner.query(`DROP TABLE "tipo_parametro"`);
        await queryRunner.query(`DROP TABLE "parametro"`);
        await queryRunner.query(`DROP TABLE "alerta"`);
        await queryRunner.query(`DROP TABLE "medicao"`);
        await queryRunner.query(`DROP TABLE "estacao"`);
    }

}
