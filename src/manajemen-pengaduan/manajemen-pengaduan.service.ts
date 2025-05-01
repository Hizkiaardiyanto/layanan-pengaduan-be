import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pengaduan } from '../entities/pengaduan.entity';

@Injectable()
export class ManajemenPengaduanService {
  constructor(
    @InjectRepository(Pengaduan)
    private readonly repo: Repository<Pengaduan>,
  ) {}

  findAll(): Promise<Pengaduan[]> {
    return this.repo.find({ order: { tanggalPengaduan: 'DESC' } });
  }

  async updateStatus(id: number, status: string): Promise<Pengaduan> {
    const pengaduan = await this.repo.findOneBy({ id });
    if (!pengaduan) throw new NotFoundException();
    pengaduan.status = status;
    return this.repo.save(pengaduan);
  }

  async remove(id: number): Promise<void> {
    const result = await this.repo.delete(id);
    if (result.affected === 0) throw new NotFoundException();
  }
}
