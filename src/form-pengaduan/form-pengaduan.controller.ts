import { Controller, Post, Body } from '@nestjs/common';
import { FormPengaduanService } from './form-pengaduan.service';
import { CreatePengaduanDto } from './dto/create-pengaduan.dto';

@Controller('form-pengaduan')
export class FormPengaduanController {
  constructor(private readonly service: FormPengaduanService) {}

  @Post()
  create(@Body() dto: CreatePengaduanDto) {
    return this.service.create(dto);
  }
}
