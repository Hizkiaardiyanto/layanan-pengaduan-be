import { IsNotEmpty } from 'class-validator';

export class CreatePengaduanDto {
  @IsNotEmpty()
  judul: string;

  @IsNotEmpty()
  isi: string;

  @IsNotEmpty()
  kategori: string;
}
