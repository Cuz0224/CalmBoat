import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;
  config.security = {
    csrf: {
      enable: false,
    },
    // 白名单
    // domainWhiteList: '*'
  };

  config.cors = {
    origin: ctx => ctx.get('origin'),
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.jwt = {
    secret: '123456', // 自定义 token 的加密条件字符串
  };


  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1631622077599_7687';

  // add your egg config in here
  // config.middleware = [ 'errorHandler', 'jwtAuth' ];
  // config.jwtAuth = {};
  config.middleware = [ 'jwtAuth', 'errorHandler' ];
  config.jwtAuth = {};

  // add your special config in here

  // the return config will combines to EggAppConfig

  return {
    ...config,
  };
};
