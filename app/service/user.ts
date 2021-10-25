import { Service } from 'egg';

export default class User extends Service {

  public async getUserToken({ username, password }) {
    const { data: token } = await this.ctx.helper.utils.http.post({
      url: '/oauth/token',
      params: {
        grant_type: 'password',
        username,
        password,
      },
    });

    if (token && token.access_token) {
      return token;
    }
    return false;
  }

  public async getUserInfo({ access_token }) {
    const userInfo = await this.ctx.helper.api.gitlab.user.getUserInfo({
      access_token,
    });
    return userInfo;
  }

  public async getTokenByApplications({ code }) {
    const { data: token } = await this.ctx.helper.utils.http.post({
      url: '/oauth/token',
      params: {
        grant_type: 'authorization_code',
        client_id: '68791e18a35a5dcb9413bcd6f99d424456de8f9e151bc2193b37f1c239446d8a',
        client_secret: 'da21408fdc2dd035abba69b63120c04a0bb769e3834b8deec3dbfd1e96a9e451',
        code,
        redirect_uri: 'http://127.0.0.1:7001/user/getTokenByApp',
      },
    });

    if (token && token.access_token) {
      return token;
    }
    return false;
  }
}
