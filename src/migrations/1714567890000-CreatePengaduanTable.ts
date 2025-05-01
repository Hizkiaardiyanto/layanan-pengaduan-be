import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePengaduanTable1714567890000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
        name: 'pengaduan',
        columns: [
            {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            },
            {
            name: 'judul',
            type: 'varchar',
            },
            {
            name: 'isi',
            type: 'text',
            },
            {
            name: 'kategori',
            type: 'varchar',
            },
            {
            name: 'tanggalPengaduan',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            },
            {
            name: 'status',
            type: 'varchar',
            default: "'Menunggu'",
            },
        ],
        }),
        true,
    );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pengaduan');
    }
}
