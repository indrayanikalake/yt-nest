import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { UserStore } from './users.store';
import { UserController } from './user.controller';

@Module({
  controllers: [UsersController, AlbumsController, UserController],
  //providers: [UserStore],
  providers: [
    { provide: 'Database_name', useValue: 'moon_night' },
    { provide: 'Email', useValue: ['moon_night', 'mongodb'] },
    {
      provide: 'Env_Config',
      useValue: {
        name: 'indrayani',
        age: 28,
      },
    },
  ],
})
export class AppModule {}
