import { Injectable } from '@nestjs/common';
import { TrpcService } from '@api/trpc/trpc.service';
import { signupSchema } from './dto/signup.dto';

@Injectable()
export class AuthRouter {
  constructor(private readonly trpc: TrpcService) {}

  authRouter = this.trpc.router({
    signup: this.trpc.procedure.input(signupSchema).mutation(({ input }) => {
      return {
        ...input,
      };
    }),
  });
}
