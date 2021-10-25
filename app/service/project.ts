import { Service } from 'egg';

export default class Project extends Service {
  public async getProjectList({ pageSize = 100, pageNum = 1, access_token }) {
    const {
      projectList,
    } = await this.ctx.helper.api.gitlab.project.getProjects({
      pageSize,
      pageNum,
      access_token,
    });
    return projectList;
  }

  // *根据 gitlab api 获取项目 list，
  public async getList({ pageSize = 100, pageNum = 1, access_token, userId }) {
    const { ctx } = this;
    const { projectList } = await ctx.helper.api.gitlab.project.getProjectByUser({
      pageSize,
      pageNum,
      access_token,
      userId,
    });
    // const selfProjectList: any = [];
    // const opt: number[] = [];

    if (!projectList) return [];
    return projectList;
  }

  public async getProject({ projectId }) {
    const { ctx } = this;
    const { singleProject } = await ctx.helper.api.gitlab.project.getProject({
      projectId,
    });
    if (!singleProject) return [];
    return singleProject;
  }

  public async createProject({ name, access_token }) {
    const { ctx } = this;
    const status = await ctx.helper.api.gitlab.project.createProject({
      name,
      access_token,
    });
    return status;
  }

  public async deleteProject({ projectId, access_token }) {
    const { ctx } = this;
    const status = await ctx.helper.api.gitlab.project.deleteProject({ projectId, access_token });
    return status;
  }
}
