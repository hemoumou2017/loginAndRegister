<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-09-24 10:13:25
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-09-24 14:13:59
 * @FilePath: /nest学习/loginAndRegister/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

```
通过 mysql + typeorm + jwt + ValidationPipe 实现了登录注册的功能。

typeorm 通过 @PrimaryGeneratedKey、@Column、@CreateDateColumn、@UpdateDateColumn 声明和数据库表的映射。

通过 TypeOrmModule.forRoot、TypeOrmModule.forFeature 的动态模块添加数据源，拿到 User 的 Repository。

然后用 Repository 来做增删改查，实现注册和登录的功能。

登录之后，把用户信息通过 jwt 的方式放在 authorization 的 header 里返回。

然后 LoginGuard 里面取出 header 来做验证，token 正确的话才放行。

此外，参数的校验使用 ValidationPipe + class-validator 来实现。

这样，就实现了注册和基于 JWT 的登录功能。
```

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
