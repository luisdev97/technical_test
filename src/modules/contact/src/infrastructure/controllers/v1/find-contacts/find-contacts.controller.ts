import { FindContactResponseDTO } from './../../../../application/find-contacts/find-contacts.response.dto';
import { Get, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindContactsService } from '../../../../application/find-contacts/find-contacs.service';
import { SUCCESSFUL_RESPONSE } from '../../../../../../shared/infrastructure/constants/constants';
import { ApiController } from '../../../../../../shared/infrastructure/decorators/api-controller.decorator';
import { routesV1 } from '../../../../../../..//routes';
import {
  FindContactsQueryInputDTO,
  FindContactsParamsInputDTO,
} from './find-contacts.input.dto';

@ApiController(routesV1.version)
@ApiTags('Contacts')
export class FindContactsController {
  constructor(private readonly service: FindContactsService) {}

  @Get(routesV1.users.findContacts)
  @ApiOperation({ summary: 'Find contacts of an user.' })
  @ApiOkResponse({
    description: SUCCESSFUL_RESPONSE,
    status: HttpStatus.OK,
    type: String,
  })
  async findContacts(
    @Param() params: FindContactsParamsInputDTO,
    @Query() queryParams: FindContactsQueryInputDTO,
  ): Promise<FindContactResponseDTO[]> {
    return this.service.execute(params, queryParams);
  }
}
