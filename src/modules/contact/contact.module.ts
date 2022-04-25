import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateContactService } from './src/application/create-contact/create-contact.service';
import { FindContactsService } from './src/application/find-contacts/find-contacs.service';
import { ContactEntity } from './src/domain/entities/contact.entity';
import { CreateContactController } from './src/infrastructure/controllers/v1/create-contact/create-contact.controller';
import { FindContactsController } from './src/infrastructure/controllers/v1/find-contacts/find-contacts.controller';

const controllers = [CreateContactController, FindContactsController];

const providers = [CreateContactService, FindContactsService];

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  controllers,
  providers,
})
export class ContactModule {}
