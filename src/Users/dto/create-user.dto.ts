import { IsEmail, IsNotEmpty, IsPhoneNumber, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @Length(8, 20)
  readonly password: string;

  readonly avatar: string;

  readonly country: String;

  readonly area: string;

  @IsNotEmpty()
  readonly address: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  readonly phone: string;

  readonly postalCode: string;
}
