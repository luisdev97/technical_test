import { ApiProperty } from '@nestjs/swagger';
import { NumberType } from '../../domain/types/contact-number-type.enum';

export class FindContactResponseDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  mailingAddress: string;

  @ApiProperty()
  number: number;

  @ApiProperty({
    type: NumberType,
  })
  numberType: NumberType;

  @ApiProperty()
  userId: number;
}
