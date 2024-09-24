import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  //   @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //     message:
  //       'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 digit',
  //   })
  @Matches(/^[a-zA-Z0-9#$%_-]+$/, {
    message: '用户名只能是字母、数字或者 #、$、%、_、- 这些字符',
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 30)
  password: string;
}
