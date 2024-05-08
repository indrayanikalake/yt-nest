import { Controller, Inject, Logger, Optional } from '@nestjs/common';
import { UserStore } from './users.store';

@Controller('/user')
export class UserController {
  /* constructor(@Optional() private store: UserStore) {
    console.log(this.store);
  }
  */
  constructor(@Inject('Env_Config') private config: Record<string, any>) {
    Logger.log(this.config);
  }
}
