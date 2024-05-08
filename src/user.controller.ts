import { Controller, Optional } from '@nestjs/common';
import { UserStore } from './users.store';

@Controller('/user')
export class UserController {
  constructor(@Optional() private store: UserStore) {
    console.log(this.store);
  }
}
