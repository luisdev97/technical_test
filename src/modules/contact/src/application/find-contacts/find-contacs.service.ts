import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactEntity } from '../../domain/entities/contact.entity';
import {
  FindContactsParamsInputDTO,
  FindContactsQueryInputDTO,
} from '../../infrastructure/controllers/v1/find-contacts/find-contacts.input.dto';
import { FindContactResponseDTO } from './find-contacts.response.dto';

@Injectable()
export class FindContactsService {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly contactRepository: Repository<ContactEntity>,
  ) {}

  async execute(
    params: FindContactsParamsInputDTO,
    queryParams: FindContactsQueryInputDTO,
  ): Promise<FindContactResponseDTO[]> {
    const query = this.contactRepository
      .createQueryBuilder('con')
      .select('con.id', 'id')
      .addSelect('con.email', 'email')
      .addSelect('con.address', 'adress')
      .addSelect('con.mailingAddress', 'mailingAdress')
      .addSelect('con.number', 'number')
      .addSelect('con.numberType', 'numberType')
      .where('con.userId = :userId', { userId: params.userId });

    const response: FindContactResponseDTO[] = await query.execute();
    return response;
  }
}
