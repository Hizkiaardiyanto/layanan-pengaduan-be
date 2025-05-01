import { Controller, Get, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ManajemenPengaduanService } from './manajemen-pengaduan.service';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('manajemen-pengaduan')
export class ManajemenPengaduanController {
  constructor(private readonly service: ManajemenPengaduanService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Update status pengaduan' })
  @ApiBody({ type: UpdateStatusDto }) // Menentukan format request body
  @ApiResponse({ status: 200, description: 'Status pengaduan berhasil diperbarui' })
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStatusDto,
  ) {
    return this.service.updateStatus(id, dto.status);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
