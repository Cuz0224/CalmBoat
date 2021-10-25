import AJAX from '../../utils/http';

module.exports = app => {
  const getProjects = async ({ pageSize, pageNum, access_token }) => {
    const { data: projectList } = await AJAX(app).methodV({
      url: '/projects',
      method: 'GET',
      query: {
        per_page: pageSize,
        page: pageNum,
        access_token,
      },
    });
    return { projectList };
  };

  const getProjectByUser = async ({ pageSize, pageNum, access_token, userId }) => {
    const { data: projectList } = await AJAX(app).methodV({
      url: `/users/${userId}/projects`,
      method: 'GET',
      query: {
        per_page: pageSize,
        page: pageNum,
        access_token,
      },
    });
    return { projectList };
  };

  const getProject = async ({ projectId }) => {
    const { data: singleProject } = await AJAX(app).methodV({
      url: `/projects/${projectId}`,
      method: 'GET',
      query: {
        projectId,
      },
    });
    return { singleProject };
  };

  const createProject = async ({ name, access_token }) => {
    const status = await AJAX(app).methodV({
      url: '/projects',
      method: 'POST',
      params: {
        name,
        access_token,
      },
    });
    return status;
  };

  const deleteProject = async ({ projectId, access_token }) => {
    const url = `/projects/${projectId}`;
    const { data: status } = await AJAX(app).methodV({
      url,
      method: 'DELETE',
      query: {
        projectId,
        access_token,
      },
    });
    return { status };
  };

  const deleteProtectedBranches = async (projectId: number) => {
    const url = `/projects/${projectId}/protected_branches/master`;
    const status = await AJAX(app).methodV({
      url,
      method: 'DELETE',
    });
    return status;
  };

  const protectedBranches = async (projectId: number) => {
    const url = `/projects/${projectId}/protected_branches`;
    const status = await AJAX(app).methodV({
      url,
      method: 'POST',
      params: {
        name: 'master',
        push_access_level: 0,
        merge_access_level: 40,
      },
    });
    return status;
  };

  return {
    getProjects,
    getProjectByUser,
    getProject,
    createProject,
    deleteProject,
    deleteProtectedBranches,
    protectedBranches,
  };
};
