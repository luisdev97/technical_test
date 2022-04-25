import { Get, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SUCCESSFUL_RESPONSE } from 'src/modules/shared/infrastructure/constants/constants';
import { ApiController } from 'src/modules/shared/infrastructure/decorators/api-controller.decorator';
import { routesV1 } from 'src/routes';
import {
  FindContactsQueryInputDTO,
  FindContactsParamsInputDTO,
} from './find-contacts.input.dto';

@ApiController(routesV1.version)
@ApiTags('Contacts')
export class FindContactsController {
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
  ): Promise<any> {
    return 'Dumb content';
  }
}
