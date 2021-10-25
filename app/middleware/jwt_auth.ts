const excludeUrl = [ '/user/getUserToken', '/name' ]; // 请求白名单，过滤不需要校验的请求路径，例如登录、或其他不需要鉴权等接口。

export default () => {
  const jwtAuth = async (ctx, next) => {

    if (excludeUrl.includes(ctx.request.url)) {
      return await next();
    }
    const token = ctx.request.header.authorization;
    if (token) {
      try {
        // 解码token
        const deCode = ctx.app.jwt.verify(
          token.replace('Bearer ', ''), // jwt 中间件验证的时候，需要去掉 Bearer
          ctx.app.config.jwt.secret,
        );
        ctx.user = deCode;
        await next();
      } catch (error) {
        ctx.status = 401;
        ctx.body = {
          code: 401,
          message: error.message,
        };
      }
      return;
    }
    ctx.status = 401;
    ctx.body = {
      code: 401,
      message: '验证失败',
    };
    return;
  };
  return jwtAuth;
};
