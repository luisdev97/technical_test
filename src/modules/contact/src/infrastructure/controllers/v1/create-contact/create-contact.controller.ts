import { Body, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateContactService } from '../../../../application/create-contact/create-contact.service';
import { SUCCESSFUL_RESPONSE } from '../../../../../../shared/infrastructure/constants/constants';
import { ApiController } from '../../../../../../shared/infrastructure/decorators/api-controller.decorator';
import { routesV1 } from '../../../../../../../routes';
import {
  CreateContactParamsInputDTO,
  CreateContactBodyInputDTO,
} from './create-contact.input.dto';
import { CreateContactResponseDTO } from '../../../../application/create-contact/create-contact.response.dto';

@ApiController(routesV1.version)
@ApiTags('Contacts')
export class CreateContactController {
  constructor(private readonly service: CreateContactService) {}

  @Post(routesV1.users.createContact)
  @ApiOperation({ summary: 'Create a new contact for current user.' })
  @ApiOkResponse({
    description: SUCCESSFUL_RESPONSE,
    status: HttpStatus.OK,
    type: CreateContactResponseDTO,
  })
  async createContact(
    @Param() params: CreateContactParamsInputDTO,
    @Body() body: CreateContactBodyInputDTO,
  ): Promise<CreateContactResponseDTO> {
    return this.service.execute(params, body);
  }
}
