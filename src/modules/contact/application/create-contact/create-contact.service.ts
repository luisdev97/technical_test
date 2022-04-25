import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactEntity } from '../../domain/entities/contact.entity';
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

    const savedContact: ContactEntity = await this.contactRepository.save(
      newContact,
    );

    return {
      message: 'Contact created succesfully',
      status: HttpStatus.OK,
    };
  }
}
