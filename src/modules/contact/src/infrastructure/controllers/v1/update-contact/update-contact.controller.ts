import { UpdateContactResponseDTO } from './../../../../application/update-contact/update-contact.response.dto';
import { UpdateContactService } from './../../../../application/update-contact/update-contact.service';
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
import { SUCCESSFUL_RESPONSE } from '../../../../../../shared/infrastructure/constants/constants';
import { ApiController } from '../../../../../../shared/infrastructure/decorators/api-controller.decorator';
import { routesV1 } from '../../../../../../..//routes';
import {
  UpdateContactBodyInputDTO,
  UpdateContactParamsInputDTO,
} from './update-contact.input.dto';

@ApiController(routesV1.version)
@ApiTags('Contacts')
export class UpdateContactController {
  constructor(private readonly service: UpdateContactService) {}

  @Put(routesV1.users.updateContact)
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update a contact of an user.' })
  @ApiOkResponse({
    description: SUCCESSFUL_RESPONSE,
    status: HttpStatus.OK,
    type: UpdateContactResponseDTO,
  })
  async updateContact(
    @Param() params: UpdateContactParamsInputDTO,
    @Body() body: UpdateContactBodyInputDTO,
  ): Promise<UpdateContactResponseDTO> {
    return this.service.execute(params, body);
  }
}
