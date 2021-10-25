import AJAX from '../../utils/http';

module.exports = app => {
  // *获取项目的分支列表
  const getBranches = async ({ pageSize, pageNum, access_token, projectId }) => {
    const { data: branchList } = await AJAX(app).methodV({
      url: `/projects/${projectId}/repository/branches`,
      method: 'GET',
      query: {
        per_page: pageSize,
        page: pageNum,
        access_token,
      },
    });
    return { branchList };
  };

  // *获取单个分支信息
  const getSingleBranch = async ({ projectId, name, access_token }) => {
    const { data } = await AJAX(app).methodV({
      url: `/projects/${projectId}/repository/branches/${name}`,
      method: 'GET',
      query: { access_token },
    });
    console.log(data);
    return { data };
  };

  // *创建分支
  const createBranch = async ({ name, ref, access_token, projectId }) => {
    const { data } = await AJAX(app).methodV({
      url: `/projects/${projectId}/repository/branches`,
      method: 'POST',
      params: {
        branch: name,
        ref,
      },
      query: { access_token },
    });
    console.log('stat', data);
    return { data };
  };

  // const deleteBranch = async ({ projectId, name, access_token }) => {
  //   const { data } = await AJAX(app).methodV({
  //     url: `/projects/${projectId}/repository/branches/${name}`,
  //     method: 'DELETE',
  //     query: { access_token, ref: 'main' },
  //   });

  //   return { data };
  // };

  return {
    getBranches,
    getSingleBranch,
    createBranch,
    // deleteBranch,
  };


};
