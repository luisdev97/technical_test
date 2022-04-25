import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ContactEntity } from '../../../src/domain/entities/contact.entity';
import { CreateContactService } from '../../../src/application/create-contact/create-contact.service';
import {
  CREATE_CONTACT_RESPONSE_FIXTURE,
  INVALID_CONTACT_INPUT_BODY_FIXTURE,
  VALID_CONTACT_INPUT_BODY_FIXTURE,
  VALID_CONTACT_INPUT_PARAMS_FIXTURE,
} from './create-contact.fixture';
import { CreateContactParamsError } from '../../../src/domain/errors/create-contact.domain.error';

describe('CreateContactService', () => {
  let service: CreateContactService;

  beforeEach(async () => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const mockUserContact = {
      create: jest.fn().mockImplementation((dto) => dto),
      save: jest
        .fn()
        .mockImplementation((contact) => Promise.resolve({ id: 2 })),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateContactService,
        {
          provide: getRepositoryToken(ContactEntity),
          useValue: mockUserContact,
        },
      ],
    }).compile();

    service = module.get<CreateContactService>(CreateContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a contact and return status code and a message', async () => {
    const serviceResponse = await service.execute(
      VALID_CONTACT_INPUT_PARAMS_FIXTURE,
      VALID_CONTACT_INPUT_BODY_FIXTURE,
    );
    expect(serviceResponse).toEqual(CREATE_CONTACT_RESPONSE_FIXTURE);
  });
});
