import { Module } from '@nestjs/common';
import { PCService } from './pc.service';
import { PCController } from './pc.controller';

@Module({
  controllers: [PCController],
  providers: [PCService],
  exports: [PCService],
})
export class PCModule {}
