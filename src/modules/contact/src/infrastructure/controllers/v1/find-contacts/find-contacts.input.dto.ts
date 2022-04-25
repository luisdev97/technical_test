import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ContactKeysEnum } from 'src/modules/contact/src/domain/types/contact-keys.enum';

export class FindContactsParamsInputDTO {
  @ApiProperty()
  userId: number;
}

export class FindContactsQueryInputDTO {
  @ApiPropertyOptional({
    enum: ContactKeysEnum,
  })
  orderBy: ContactKeysEnum;

  @ApiPropertyOptional({
    enum: ['ASC', 'DESC'],
  })
  senseOfOrder: 'ASC' | 'DESC';
}
