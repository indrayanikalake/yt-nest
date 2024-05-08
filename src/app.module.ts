import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { UserStore } from './users.store';

@Module({
  controllers: [UsersController, AlbumsController],
  providers: [UserStore],
})
export class AppModule {}
