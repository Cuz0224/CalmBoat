import { Service } from 'egg';

export default class Project extends Service {
  public async getProjectList({ pageSize = 100, pageNum = 1, accessToken }) {
    const {
      projectList,
    } = await this.ctx.helper.api.gitlab.project.getProjects({
      pageSize,
      pageNum,
      accessToken,
    });
    return projectList;
  }
}
