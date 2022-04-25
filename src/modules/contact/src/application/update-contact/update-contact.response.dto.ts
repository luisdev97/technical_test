import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

export class UpdateContactResponseDTO {
  @ApiProperty()
  status: HttpStatus;

  @ApiProperty()
  message: string;
}
