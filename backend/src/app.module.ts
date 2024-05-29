import { Module } from '@nestjs/common';
import { GadgetModule } from './gadget/gadget.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [GadgetModule, PrismaModule],
  providers: [PrismaService],
})
export class AppModule {}
