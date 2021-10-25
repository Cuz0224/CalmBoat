import BaseController from '../controller/basecontroller';

export default class UserController extends BaseController {
  public async getUserToken({
    request: {
      body: { username, password },
    },
  }) {
    const { ctx, app } = this;
    // gitlab 获取 access_token
    const userToken = await ctx.service.user.getUserToken({
      username,
      password,
    });
    console.log(userToken);

    const userInfo = await ctx.service.user.getUserInfo({
      access_token: userToken.access_token,
    });


    const { avatar_url,
      id,
      web_url,
      name,
      email } = userInfo;

    const token = app.jwt.sign(
      {
        userToken,
        userInfo,
      },
      app.config.jwt.secret,
    );

    ctx.set({ authorization: token }); // 设置 headers

    this.success({
      avatar_url,
      id,
      web_url,
      name,
      email });
  }


  // public async getTokenByApplications({
  //   request: {
  //     query: { code },
  //   },
  // }) {
  //   const { ctx } = this;
  //   // gitLab 获取 access_token
  //   const userToken = await ctx.service.user.getTokenByApplications({ code });
  //   this.ctx.body = userToken;
  // }
}
