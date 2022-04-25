import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NumberType } from '../../../../domain/types/contact-number-type.enum';

export class CreateContactParamsImputDto {
  @ApiProperty()
  userId: number;
}

export class CreateContactBodyInputDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  mailingAddress: string;

  @ApiProperty()
  number: number;

  @ApiPropertyOptional({
    enum: NumberType,
  })
  numberType: NumberType;
}
