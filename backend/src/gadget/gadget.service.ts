import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GadgetService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllGadgets() {
    return await this.prisma.gadgets.findMany({});
  }

  async getHello() {
    return await this.prisma.gadgets.create({
      data: {
        description: 'teste',
        name: 'teste',
      },
    });
  }
}
