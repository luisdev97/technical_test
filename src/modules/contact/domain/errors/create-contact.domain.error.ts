import { HttpStatus } from '@nestjs/common';
import { DomainError } from 'src/modules/shared/domain/error/domain-error';
import { IDomainError } from 'src/modules/shared/domain/error/domain-error.interface';

const CREATE_CONTACT_INVALID_PARAMS_ERROR: IDomainError = {
  code: HttpStatus.BAD_REQUEST,
  message: 'Error creating the contact',
};

export class CreateContactParamsError extends DomainError {
  constructor() {
    super(CREATE_CONTACT_INVALID_PARAMS_ERROR);
  }
}
