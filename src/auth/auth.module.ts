import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../Users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { LocalStretegy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: { expiresIn: configService.get<string>('JWT_TIME_OUT') },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, LocalStretegy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
