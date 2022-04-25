import { NumberType } from './../../../../domain/types/contact-number-type.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateContactParamsInputDTO {
  @ApiProperty()
  contactId: number;
}

export class UpdateContactBodyInputDTO {
  @ApiPropertyOptional()
  email?: string;

  @ApiPropertyOptional()
  address?: string;

  @ApiPropertyOptional()
  mailingAddress?: string;

  @ApiPropertyOptional()
  number?: number;

  @ApiPropertyOptional({
    enum: NumberType,
  })
  numberType?: NumberType;
}
