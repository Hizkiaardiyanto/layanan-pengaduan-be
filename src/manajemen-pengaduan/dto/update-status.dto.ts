import { IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStatusDto {
  @ApiProperty({
    description: 'Status pengaduan yang ingin diperbarui',
    enum: ['Menunggu', 'Diproses', 'Selesai'],
    example: 'Selesai',
  })
  @IsIn(['Menunggu', 'Diproses', 'Selesai'])
  status: string;
}
