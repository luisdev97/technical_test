import { UpdateContactResponseDTO } from '../../../src/application/update-contact/update-contact.response.dto';
import {
  UpdateContactBodyInputDTO,
  UpdateContactParamsInputDTO,
} from '../../../src/infrastructure/controllers/v1/update-contact/update-contact.input.dto';

//Contact creation FIXTURE
export const VALID_CONTACT_INPUT_PARAMS_FIXTURE: UpdateContactParamsInputDTO = {
  contactId: 1,
};

export const VALID_CONTACT_INPUT_BODY_FIXTURE: UpdateContactBodyInputDTO = {
  email: 'silvia_updated@hotmail.com',
  number: 37151606,
};

export const UPDATE_CONTACT_RESPONSE_FIXTURE: UpdateContactResponseDTO = {
  status: 200,
  message: 'Contact updated successfully',
};
