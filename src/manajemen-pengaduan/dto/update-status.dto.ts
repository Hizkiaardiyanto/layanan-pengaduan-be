import { IsIn } from 'class-validator';

export class UpdateStatusDto {
  @IsIn(['Menunggu', 'Diproses', 'Selesai'])
  status: string;
}
