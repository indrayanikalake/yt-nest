import { Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import { of } from 'rxjs';
import { Request, Response } from 'express';

interface ProfileParams {
  id: number;
  name: string;
}

@Controller('/users')
export class UsersController {
  @Get('/profile/:id/:name')
  async getProfile(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @Param() params: ProfileParams,
    //Param('id') param: number,
  ) {
    console.log(params.name);
    // return new Promise((resolve) => resolve({ hello: 'world' }));
    return of({
      hello: 'world',
    });
  }
  @Get('/video')
  getVideo(
    @Query() query: ProfileParams,
    //Headers('user-agent') headers: Record<string, any>,
  ) {
    console.log(query.name);
    // return new Promise((resolve) => resolve({ hello: 'world' }));
    return of({
      hello: 'world',
    });
  }
}
