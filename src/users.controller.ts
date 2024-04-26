import { Controller, Get, Req, Res } from '@nestjs/common';
import { of } from 'rxjs';
import { Request, Response } from 'express';

@Controller('/users')
export class UsersController {
  @Get('/profile')
  async getProfile(@Req() req: Request, @Res() res: Response) {
    // return new Promise((resolve) => resolve({ hello: 'world' }));
    return of({
      hello: 'world',
    });
  }
}