import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1716593465897 implements MigrationInterface {
    name = 'Default1716593465897'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estacao" DROP CONSTRAINT "UQ_4a968b6072311f7453bbf13238c"`);
        await queryRunner.query(`ALTER TABLE "estacao" DROP COLUMN "codigoIdentificacao"`);
        await queryRunner.query(`ALTER TABLE "estacao" ADD "idPlacaEstacao" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estacao" ADD CONSTRAINT "UQ_d18c56a9633160fb8e03c003f04" UNIQUE ("idPlacaEstacao")`);
        await queryRunner.query(`ALTER TABLE "estacao" ADD "bateriaEstacao" integer NOT NULL DEFAULT '100'`);
        await queryRunner.query(`ALTER TABLE "estacao" ADD "unixtimeBateriaEstacao" integer`);
        await queryRunner.query(`ALTER TABLE "parametro" DROP CONSTRAINT "FK_21b8ab74bacc32843f540a4a2c4"`);
        await queryRunner.query(`ALTER TABLE "estacao" DROP CONSTRAINT "PK_8cdefb357d46ad4796ccfc318b8"`);
        await queryRunner.query(`ALTER TABLE "estacao" DROP COLUMN "idEstacao"`);
        await queryRunner.query(`ALTER TABLE "estacao" ADD "idEstacao" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "estacao" ADD CONSTRAINT "PK_8cdefb357d46ad4796ccfc318b8" PRIMARY KEY ("idEstacao")`);
        await queryRunner.query(`ALTER TABLE "medicao" DROP COLUMN "valorMedida"`);
        await queryRunner.query(`ALTER TABLE "medicao" ADD "valorMedida" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "parametro" DROP COLUMN "estacoesIdEstacao"`);
        await queryRunner.query(`ALTER TABLE "parametro" ADD "estacoesIdEstacao" uuid`);
        await queryRunner.query(`ALTER TABLE "parametro" ADD CONSTRAINT "FK_21b8ab74bacc32843f540a4a2c4" FOREIGN KEY ("estacoesIdEstacao") REFERENCES "estacao"("idEstacao") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parametro" DROP CONSTRAINT "FK_21b8ab74bacc32843f540a4a2c4"`);
        await queryRunner.query(`ALTER TABLE "parametro" DROP COLUMN "estacoesIdEstacao"`);
        await queryRunner.query(`ALTER TABLE "parametro" ADD "estacoesIdEstacao" integer`);
        await queryRunner.query(`ALTER TABLE "medicao" DROP COLUMN "valorMedida"`);
        await queryRunner.query(`ALTER TABLE "medicao" ADD "valorMedida" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estacao" DROP CONSTRAINT "PK_8cdefb357d46ad4796ccfc318b8"`);
        await queryRunner.query(`ALTER TABLE "estacao" DROP COLUMN "idEstacao"`);
        await queryRunner.query(`ALTER TABLE "estacao" ADD "idEstacao" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estacao" ADD CONSTRAINT "PK_8cdefb357d46ad4796ccfc318b8" PRIMARY KEY ("idEstacao")`);
        await queryRunner.query(`ALTER TABLE "parametro" ADD CONSTRAINT "FK_21b8ab74bacc32843f540a4a2c4" FOREIGN KEY ("estacoesIdEstacao") REFERENCES "estacao"("idEstacao") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estacao" DROP COLUMN "unixtimeBateriaEstacao"`);
        await queryRunner.query(`ALTER TABLE "estacao" DROP COLUMN "bateriaEstacao"`);
        await queryRunner.query(`ALTER TABLE "estacao" DROP CONSTRAINT "UQ_d18c56a9633160fb8e03c003f04"`);
        await queryRunner.query(`ALTER TABLE "estacao" DROP COLUMN "idPlacaEstacao"`);
        await queryRunner.query(`ALTER TABLE "estacao" ADD "codigoIdentificacao" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estacao" ADD CONSTRAINT "UQ_4a968b6072311f7453bbf13238c" UNIQUE ("codigoIdentificacao")`);
    }

}
