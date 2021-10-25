import { Service } from 'egg';

export default class Branch extends Service {
  // *获取分支列表
  public async getBranchList({ pageSize = 10, pageNum = 1, access_token, projectId }) {
    const { branchList } = await this.ctx.helper.api.gitlab.branch.getBranches({
      pageSize,
      pageNum,
      access_token,
      projectId,
    });
    return branchList;
  }

  // *获取单个分支信息
  public async getSingleBranch({ projectId, name, access_token }) {
    const branch = await this.ctx.helper.api.gitlab.branch.getSingleBranch({
      projectId,
      name,
      access_token,
    });
    console.log(branch);
    return branch;
  }


  // *创建分支
  public async createBranch({ name, ref, access_token, projectId }) {
    const create = await this.ctx.helper.api.gitlab.branch.createBranch({
      name,
      ref,
      access_token,
      projectId,
    });
    console.log(create);
    return create;
  }

  // public async deleteBranch({ projectId, name, access_token }) {
  //   const deleteStatus = await this.ctx.helper.api.gitlab.branch.createBranch({
  //     projectId,
  //     name,
  //     access_token,
  //   });
  //   console.log(deleteStatus);
  //   return deleteStatus;
  // }
}
