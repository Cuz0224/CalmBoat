import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/name', controller.home.name);
  // 获取 token 获取用户信息
  router.post('/user/getUserToken', controller.user.getUserToken);
  // router.get('/user/getTokenByApp', controller.user.getTokenByApplications);

  // *project 接口
  // 显示所有项目
  router.get('/project/getProjectList', controller.project.getProjectList);
  // 显示自己的项目
  router.get('/project/getList', controller.project.getList);
  // 单个项目详情
  router.get('/project/getSingleProject/:id', controller.project.getSingleProject);
  // 新建项目
  router.post('/project/createProject', controller.project.createProjects);
  // 删除项目
  router.delete('/project/deleteProject/:id', controller.project.deleteProject);

  // 获取项目的分支
  router.get('/branch/:id', controller.branch.getList);
  // 获取单个项目分支信息
  router.get('/branch/:projectId/:name', controller.branch.getSingleBranch);
  // 创建分支
  router.post('/branch/create', controller.branch.createBranch);
  // router.delete('/branch/:projectId/:name', controller.branch.deleteBranch);
};
