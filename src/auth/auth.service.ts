import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../Users/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async autherizeUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findUserByEmail(email);

    if (!user) throw new BadRequestException();

    if (!(await bcrypt.compare(password, (await user).password)))
      throw new UnauthorizedException();

    return user;
  }

  login(user: any) {
    const payload = { name: user.firstName };
    return { access_token: this.jwtService.sign(payload) };
  }
}
