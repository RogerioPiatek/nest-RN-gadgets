import { Module } from '@nestjs/common';
import { GadgetController } from './gadget.controller';
import { GadgetService } from './gadget.service';

@Module({
  controllers: [GadgetController],
  providers: [GadgetService],
  imports: [],
})
export class GadgetModule {}
