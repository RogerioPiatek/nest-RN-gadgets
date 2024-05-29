import { Injectable } from '@nestjs/common';
import { Gadgets } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GadgetService {
  constructor(private readonly prisma: PrismaService) {}
  async getHello(): Promise<Gadgets> {
    return await this.prisma.gadgets.create({
      data: {
        description: 'teste',
        name: 'teste',
      },
    });
  }
}
