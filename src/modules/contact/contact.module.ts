import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEntity } from './domain/entities/contact.entity';

const controllers = [];

const providers = [];

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  controllers,
  providers,
})
export class ContactModule {}
