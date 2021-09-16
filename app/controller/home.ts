import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = `Hello ${ctx.helper.util.hello()}!`;
  }
  public async name() {
    const { ctx } = this;
    ctx.body = `Hello cnz!`;
  }
}
