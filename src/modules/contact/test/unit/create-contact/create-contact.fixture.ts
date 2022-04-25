import { CreateContactResponseDTO } from '../../../src/application/create-contact/create-contact.response.dto';
import { NumberType } from '../../../src/domain/types/contact-number-type.enum';
import {
  CreateContactParamsInputDTO,
  CreateContactBodyInputDTO,
} from '../../../src/infrastructure/controllers/v1/create-contact/create-contact.input.dto';

//Contact creation FIXTURE
export const VALID_CONTACT_INPUT_PARAMS_FIXTURE: CreateContactParamsInputDTO = {
  userId: 1,
};

export const VALID_CONTACT_INPUT_BODY_FIXTURE: CreateContactBodyInputDTO = {
  email: 'silvia@gmail.com',
  address: 'avd Gold, n3 - 3A',
  mailingAddress: 'silvia mailing address',
  number: 41510606,
  numberType: NumberType.MOBILE,
};

export const INVALID_CONTACT_INPUT_BODY_FIXTURE: CreateContactBodyInputDTO = {
  email: 'silvia@gmail.com',
  address: null,
  mailingAddress: 'silvia mailing address',
  number: null,
  numberType: NumberType.MOBILE,
};

export const CREATE_CONTACT_RESPONSE_FIXTURE: CreateContactResponseDTO = {
  status: 200,
  message: 'Contact created successfully',
};
