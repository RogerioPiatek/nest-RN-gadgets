import { Controller, Get } from '@nestjs/common';
import { GadgetService } from './gadget.service';

@Controller('gadgets')
export class GadgetController {
  constructor(private readonly gadgetService: GadgetService) {}

  @Get('create')
  getHello() {
    return this.gadgetService.getHello();
  }

  @Get('getAll')
  getAllGadgets() {
    return this.gadgetService.getAllGadgets();
  }
}
