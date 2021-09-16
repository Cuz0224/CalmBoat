import { Controller } from 'egg';

export default class ProjectController extends Controller {
  public async getProjectList() {
    const { ctx } = this;
    const { params } = ctx.request.body;
    const { pageSize, pageNum, accessToken } = params;
    const projectList = await ctx.service.project.getProjectList({
      pageSize,
      pageNum,
      accessToken,
    });
    ctx.body = projectList;
  }
}
