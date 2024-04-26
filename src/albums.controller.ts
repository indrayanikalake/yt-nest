import { Controller, Get } from '@nestjs/common';

@Controller('/users')
export class AlbumsController {
  @Get('/albums')
  getAlbums() {
    return {
      message: 'albums',
    };
  }
}