import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Redirect,
  Res,
  Body,
} from '@nestjs/common';
import { Response } from 'express';

interface AlbumDTO {
  name: string;
  email: string;
}

@Controller('/users')
export class AlbumsController {
  @Post('/albums')
  @HttpCode(HttpStatus.NO_CONTENT)
  @Header('cache-control', 'none')
  @Header('X-Name', 'Albums')
  @Redirect('/users/account', 302)
  getAlbums(
    @Res({ passthrough: true }) res: Response,
    @Body() requestData: AlbumDTO,
  ) {
    console.log(requestData);
    const rn = ~~(Math.random() * 10 * 1);
    if (rn < 5) {
      return {
        url: '/users/account',
        statusCode: HttpStatus.MOVED_PERMANENTLY,
      };
    } else {
      return {
        url: '/users/wallet',
        statusCode: 302,
      };
    }
  }
  @Get('/account')
  redirectAccount() {
    return 'Account Working';
  }
  @Get('/wallet')
  redirectWallet() {
    return 'Wallet Working';
  }
}
