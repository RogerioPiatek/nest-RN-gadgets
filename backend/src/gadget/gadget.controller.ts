import { Controller, Get } from '@nestjs/common';
import { GadgetService } from './gadget.service';
import { Gadgets } from '@prisma/client';

@Controller()
export class GadgetController {
  constructor(private readonly appService: GadgetService) {}

  @Get()
  getHello(): Promise<Gadgets> {
    return this.appService.getHello();
  }
}
