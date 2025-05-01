import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManajemenPengaduanController } from './manajemen-pengaduan.controller';
import { ManajemenPengaduanService } from './manajemen-pengaduan.service';
import { Pengaduan } from '../entities/pengaduan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pengaduan])],
  controllers: [ManajemenPengaduanController],
  providers: [ManajemenPengaduanService],
})
export class ManajemenPengaduanModule {}
