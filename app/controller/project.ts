import BaseController from './basecontroller';

export default class ProjectController extends BaseController {

  public async getProjectList() {
    const { ctx } = this;
    const { pageSize, pageNum } = ctx.request.body;
    const { access_token } = this.user;
    const projectList = await ctx.service.project.getProjectList({
      pageSize,
      pageNum,
      access_token,
    });
    ctx.body = projectList;
  }

  // *获取 gitlab 自身的项目列表
  public async getList({ request: { query } }) {
    const { ctx } = this;
    const { access_token } = this.user;
    const { id: userId } = this.userInfo;
    const { pageSize, pageNum } = query;
    const projectList = await ctx.service.project.getList({
      pageSize,
      pageNum,
      access_token,
      userId,
    });
    this.success(projectList);
  }

  public async getSingleProject() {
    const { ctx } = this;
    const projectId = ctx.params.id;
    const project = await ctx.service.project.getProject({
      projectId,
    });
    this.success(project);
  }

  public async createProjects(
    {
      request: {
        body: { name },
      },
    },
  ) {
    const { ctx } = this;
    const { access_token } = this.user;
    const createProject = await ctx.service.project.createProject({
      name,
      access_token,
    });
    ctx.body = createProject;
  }

  public async deleteProject() {
    const { ctx } = this;
    const projectId = ctx.params.id;
    const { access_token } = this.user;
    const deleteProject = await ctx.service.project.deleteProject({
      projectId,
      access_token,
    });
    ctx.body = deleteProject;
  }
}
