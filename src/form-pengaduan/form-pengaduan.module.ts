import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormPengaduanController } from './form-pengaduan.controller';
import { FormPengaduanService } from './form-pengaduan.service';
import { Pengaduan } from '../entities/pengaduan.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Pengaduan])],
    controllers: [FormPengaduanController],
    providers: [FormPengaduanService],
})
export class FormPengaduanModule {}
