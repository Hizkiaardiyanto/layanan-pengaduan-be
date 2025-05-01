import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pengaduan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  judul: string;

  @Column()
  isi: string;

  @Column()
  kategori: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  tanggalPengaduan: Date;

  @Column({ default: 'Menunggu' })
  status: string; // Menunggu | Diproses | Selesai
}
