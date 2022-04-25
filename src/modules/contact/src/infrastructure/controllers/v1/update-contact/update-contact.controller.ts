import {
  Body,
  Headers,
  HttpStatus,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateContactResponseDTO } from 'src/modules/contact/src/application/create-contact/create-contact.response.dto';
import { SUCCESSFUL_RESPONSE } from 'src/modules/shared/infrastructure/constants/constants';
import { ApiController } from 'src/modules/shared/infrastructure/decorators/api-controller.decorator';
import { routesV1 } from 'src/routes';
import {
  UpdateContactBodyInputDTO,
  UpdateContactParamsInputDTO,
} from './update-contact.input.dto';

@ApiController(routesV1.version)
@ApiTags('Contacts')
export class UpdateContactController {
  @Put(routesV1.users.updateContact)
  @ApiOperation({ summary: 'Update a contact of an user.' })
  @ApiOkResponse({
    description: SUCCESSFUL_RESPONSE,
    status: HttpStatus.OK,
    type: String,
  })
  async updateContact(
    @Param() params: UpdateContactParamsInputDTO,
    @Body() body: UpdateContactBodyInputDTO,
  ): Promise<string> {
    return '';
  }
}
