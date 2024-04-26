import {
  Controller,
  Get,
  Param,
  Query,
  Req,
  Res,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { of } from 'rxjs';
import { Request, Response } from 'express';
import { CreateUserDTO } from './dto';

interface ProfileParams {
  id: number;
  name: string;
}

let users = [];

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

  @Post()
  createUser(@Body() createUser: CreateUserDTO) {
    users.push(createUser);
    console.log(users);
  }

  @Get()
  getUsers() {
    return users;
  }

  @Get('/:id')
  getUser(@Param('id') id: number) {
    return users.find((user) => +user.id === +id);
  }
  @Put('/:id')
  updateUser(@Param('id') id: number, @Body() updateUser: CreateUserDTO) {
    const userId = users.findIndex((user) => +user.id === +id);
    if (!userId) return;
    users[userId] = updateUser;
  }
  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    users = users.filter((user) => user.id === id);
  }
}
