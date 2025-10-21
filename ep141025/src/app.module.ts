import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PCModule } from './pc/pc.module';
import { ComponentModule } from './component/component.module';
import { FakeDatabaseModule } from './fake-database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    FakeDatabaseModule,
    PCModule,
    ComponentModule,
  ],
})
export class AppModule {}
