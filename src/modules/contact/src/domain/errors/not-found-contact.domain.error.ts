import { IDomainError } from '../../../../shared/domain/error/domain-error.interface';
import { DomainError } from '../../../../shared/domain/error/domain-error';
import { HttpStatus } from '@nestjs/common';

const CONTACT_NOT_FOUND_ERROR: IDomainError = {
  code: HttpStatus.BAD_REQUEST,
  message: 'There is not a contact with this identification',
};
export class ContactNotFoundError extends DomainError {
  constructor() {
    super(CONTACT_NOT_FOUND_ERROR);
  }
}
