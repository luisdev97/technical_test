import { ContactNotFoundError } from './../../domain/errors/not-found-contact.domain.error';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactEntity } from '../../domain/entities/contact.entity';
import {
  UpdateContactParamsInputDTO,
  UpdateContactBodyInputDTO,
} from '../../infrastructure/controllers/v1/update-contact/update-contact.input.dto';
import { UpdateContactResponseDTO } from './update-contact.response.dto';

@Injectable()
export class UpdateContactService {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly contactRepository: Repository<ContactEntity>,
  ) {}

  async execute(
    params: UpdateContactParamsInputDTO,
    body: UpdateContactBodyInputDTO,
  ): Promise<UpdateContactResponseDTO> {
    const contact = await this.contactRepository.findOne({
      where: { id: params.contactId },
    });

    if (!contact) {
      throw new ContactNotFoundError();
    }

    const updatedContact: ContactEntity = await this.contactRepository.save({
      ...contact,
      ...body,
    });

    return {
      message: 'Contact updated successfully',
      status: HttpStatus.OK,
    };
  }
}
