import { Module, Global } from '@nestjs/common';
import { DataSource } from 'typeorm';

const FakeRepository = {
  find: () => [],
  findOne: () => ({}),
  save: (dto: any) => dto,
  delete: () => ({}),
};

const FakeDataSource = {
  getRepository: () => FakeRepository,
  manager: { find: () => [], save: (dto: any) => dto, delete: () => ({}) },
};

@Global()
@Module({
  providers: [
    {
      provide: DataSource,
      useValue: FakeDataSource,
    },
  ],
  exports: [DataSource],
})
export class FakeDatabaseModule {}
