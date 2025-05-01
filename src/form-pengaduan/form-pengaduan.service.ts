import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pengaduan } from '../entities/pengaduan.entity';
import { CreatePengaduanDto } from './dto/create-pengaduan.dto';

@Injectable()
export class FormPengaduanService {
  constructor(
    @InjectRepository(Pengaduan)
    private readonly repo: Repository<Pengaduan>,
  ) {}

  async create(dto: CreatePengaduanDto): Promise<Pengaduan> {
    const newData = this.repo.create({ ...dto });
    return this.repo.save(newData);
  }
}
