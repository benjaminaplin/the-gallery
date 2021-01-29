import {MigrationInterface, QueryRunner} from "typeorm";

export class initTables1611884703240 implements MigrationInterface {
    name = 'initTables1611884703240'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "art_work_type_enum" AS ENUM('oil_painting', 'water_color', 'drawing', 'sculpture', 'photograph')`);
        await queryRunner.query(`CREATE TABLE "art_work" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" text NOT NULL, "imageUrl" character varying NOT NULL, "type" "art_work_type_enum" NOT NULL, "size" character varying NOT NULL, "views" integer NOT NULL, "isPublished" boolean NOT NULL, "isAvailable" boolean NOT NULL, "artistId" integer, CONSTRAINT "PK_676d0bb981a005b0dcdc06d7ace" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "artist" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "art_work" ADD CONSTRAINT "FK_b1a703c06ea596e49846397593d" FOREIGN KEY ("artistId") REFERENCES "artist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "art_work" DROP CONSTRAINT "FK_b1a703c06ea596e49846397593d"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "artist"`);
        await queryRunner.query(`DROP TABLE "art_work"`);
        await queryRunner.query(`DROP TYPE "art_work_type_enum"`);
    }

}
