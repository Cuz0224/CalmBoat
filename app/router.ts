import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/name', controller.home.name);
  router.post('/user/getUserToken', controller.user.getUserToken);
  router.get('/user/getTokenByApp', controller.user.getTokenByApplications);
  router.post('/project/getProjectList', controller.project.getProjectList);
};
