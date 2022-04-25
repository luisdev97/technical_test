import { ContactNotFoundError } from './../../../src/domain/errors/not-found-contact.domain.error';
import {
  VALID_CONTACT_INPUT_PARAMS_FIXTURE,
  VALID_CONTACT_INPUT_BODY_FIXTURE,
  UPDATE_CONTACT_RESPONSE_FIXTURE,
} from './update-contact.fixture';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockType } from 'test/utilities/mock-factory';
import { Repository } from 'typeorm';
import { UpdateContactService } from '../../../src/application/update-contact/update-contact.service';
import { ContactEntity } from '../../../src/domain/entities/contact.entity';

describe('UpdateContactService', () => {
  let service: UpdateContactService;
  let contactRepositoryMock: MockType<Repository<ContactEntity>>;

  beforeEach(async () => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const mockUserContact = {
      findOne: jest
        .fn()
        .mockImplementation((dto) => Promise.resolve(ContactEntity)),
      save: jest
        .fn()
        .mockImplementation((contact) => Promise.resolve({ id: 2 })),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateContactService,
        {
          provide: getRepositoryToken(ContactEntity),
          useValue: mockUserContact,
        },
      ],
    }).compile();

    service = module.get<UpdateContactService>(UpdateContactService);
    contactRepositoryMock = module.get(getRepositoryToken(ContactEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw an error when there is not a contact with the indicated ID', () => {
    contactRepositoryMock.findOne.mockReturnValue(undefined);
    expect(
      service.execute(
        VALID_CONTACT_INPUT_PARAMS_FIXTURE,
        VALID_CONTACT_INPUT_BODY_FIXTURE,
      ),
    ).rejects.toThrowError(new ContactNotFoundError());
  });

  it('should update a contact and return status code and a message', async () => {
    const serviceResponse = await service.execute(
      VALID_CONTACT_INPUT_PARAMS_FIXTURE,
      VALID_CONTACT_INPUT_BODY_FIXTURE,
    );
    expect(serviceResponse).toEqual(UPDATE_CONTACT_RESPONSE_FIXTURE);
  });
});
