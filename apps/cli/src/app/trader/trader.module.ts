import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { Commands } from './commands';
import { Questions } from './questions';
import { TraderService } from './trader.service';

@Module({
  imports: [HttpModule],
  providers: [
    TraderService,
    ...Commands,
    ...Questions,
  ],
})
export class TraderModule {}
