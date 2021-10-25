import BaseController from './basecontroller';

export default class BranchController extends BaseController {
  // *获取项目的分支信息
  public async getList() {
    const { ctx } = this;
    const projectId = ctx.params.id;
    const { pageSize, pageNum } = ctx.request.body;
    const { access_token } = this.user;
    const branchList = await ctx.service.branch.getBranchList({
      pageSize,
      pageNum,
      access_token,
      projectId,
    });
    this.success(branchList);
  }

  // *获取单个分支信息
  public async getSingleBranch() {
    const { ctx } = this;
    const { access_token } = this.user;
    const { projectId } = ctx.params;
    const { name } = ctx.params;
    const branch = await this.ctx.service.branch.getSingleBranch({
      projectId,
      name,
      access_token,
    });
    ctx.body = branch;
  }

  // *创建分支
  public async createBranch(
    {
      request: {
        body: { name, ref, projectId },
      },
    },
  ) {
    const { ctx } = this;
    const { access_token } = this.user;
    const createBranch = await ctx.service.branch.createBranch({
      name,
      ref,
      access_token,
      projectId,
    });
    ctx.body = createBranch;
  }

  // public async deleteBranch() {
  //   const { ctx } = this;
  //   const { projectId } = ctx.params;
  //   const { name } = ctx.params;
  //   const { access_token } = this.user;
  //   const deleteBranch = await ctx.service.branch.deleteBranch({
  //     projectId,
  //     name,
  //     access_token,
  //   });
  //   return deleteBranch;
  // }

}
