import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactResponseDTO {
  @ApiProperty()
  status: HttpStatus;

  @ApiProperty()
  message: string;
}
