import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';
import { AuthRouter } from '@api/modules/auth/auth.router';

@Module({
  imports: [],
  controllers: [],
  providers: [TrpcService, TrpcRouter, AuthRouter],
})
export class TrpcModule {}
