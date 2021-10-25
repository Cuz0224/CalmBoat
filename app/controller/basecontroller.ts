import { Controller } from 'egg';
import HttpExceptions from '../exceptions/http_exceptions';

export default class BaseController extends Controller {
  get user() {
    return this.ctx.user.userToken;
  }

  get userInfo() {
    return this.ctx.user.userInfo;
  }

  success(data) {
    this.ctx.body = {
      code: 0,
      data,
    };
  }

  error({ msg = '服务器异常', code = 1, httpCode = 400 }) {
    throw new HttpExceptions({
      code,
      httpCode,
      msg,
    });
  }
}
