import { Body, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SUCCESSFUL_RESPONSE } from 'src/modules/shared/infrastructure/constants/constants';
import { ApiController } from 'src/modules/shared/infrastructure/decorators/api-controller.decorator';
import { routesV1 } from 'src/routes';
import {
  CreateContactBodyInputDto,
  CreateContactParamsImputDto,
} from './create-contact.input.dto';

@ApiController(routesV1.version)
@ApiTags('Contacts')
export class CreateContactController {
  @Post(routesV1.users.createContact)
  @ApiOperation({ summary: 'Create a new contact for current user.' })
  @ApiOkResponse({
    description: SUCCESSFUL_RESPONSE,
    status: HttpStatus.OK,
    type: Boolean,
  })
  async createContact(
    @Param() params: CreateContactParamsImputDto,
    @Body() body: CreateContactBodyInputDto,
  ): Promise<any> {
    return true;
  }
}
