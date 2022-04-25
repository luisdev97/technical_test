import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactEntity } from '../../domain/entities/contact.entity';
import { CreateContactParamsError } from '../../domain/errors/create-contact.domain.error';
import {
  CreateContactBodyInputDto,
  CreateContactParamsImputDto,
} from '../../infrastructure/controllers/v1/create-contact/create-contact.input.dto';
import { CreateContactResponseDTO } from './create-contact.response.dto';

@Injectable()
export class CreateContactService {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly contactRepository: Repository<ContactEntity>,
  ) {}

  async execute(
    params: CreateContactParamsImputDto,
    body: CreateContactBodyInputDto,
  ): Promise<CreateContactResponseDTO> {
    const newContact: ContactEntity = this.contactRepository.create({
      ...params,
      ...body,
    });

    if (
      !newContact.address ||
      !newContact.email ||
      !newContact.mailingAddress ||
      !newContact.number
    ) {
      throw new CreateContactParamsError();
    }

    const savedContact: ContactEntity = await this.contactRepository.save(
      newContact,
    );

    if (!savedContact) {
      throw new CreateContactParamsError();
    }

    return {
      message: 'Contact created succesfully',
      status: HttpStatus.OK,
    };
  }
}
