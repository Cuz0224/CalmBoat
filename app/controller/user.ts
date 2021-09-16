import { Controller } from 'egg';

export default class UserController extends Controller {
  public async getUserToken({
    request: {
      body: { params },
    },
  }) {
    const { ctx } = this;
    const { username, password } = params;

    // gitLab 获取 access_token
    const userToken = await ctx.service.user.getUserToken({
      username,
      password,
    });

    this.ctx.body = userToken;
  }

  public async getTokenByApplications({
    request: {
      query: { code },
    },
  }) {
    const { ctx } = this;
    // gitLab 获取 access_token
    const userToken = await ctx.service.user.getTokenByApplications({ code });
    this.ctx.body = userToken;
  }
}