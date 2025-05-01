import { Controller, Get, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ManajemenPengaduanService } from './manajemen-pengaduan.service';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('manajemen-pengaduan')
export class ManajemenPengaduanController {
  constructor(private readonly service: ManajemenPengaduanService) {}

  @Get()
  @ApiOperation({ summary: 'Mengambil seluruh pengaduan' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil data pengaduan' })
  findAll() {
    return this.service.findAll();
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Update status pengaduan' })
  @ApiBody({ 
    type: UpdateStatusDto, 
    description: 'Status yang baru untuk pengaduan (Menunggu, Diproses, Selesai)' 
  }) // Pastikan API Body ditambahkan untuk menjelaskan format request body
  @ApiResponse({ 
    status: 200, 
    description: 'Status pengaduan berhasil diperbarui' 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Request body tidak valid'
  })
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStatusDto,
  ) {
    return this.service.updateStatus(id, dto.status);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Menghapus pengaduan berdasarkan ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Pengaduan berhasil dihapus' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Pengaduan tidak ditemukan' 
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
