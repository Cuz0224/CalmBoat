import AJAX from '../../utils/http';

module.exports = app => {

  const getUserInfo = async ({ access_token }) => {
    console.table(access_token);
    const { data: userInfo } = await AJAX(app).methodV({
      url: '/user',
      method: 'GET',
      query: {
        access_token,
      },
    });

    return userInfo;
  };

  const getUsers = async ({ params = {}, pageNum = 1, pageSize = 100 }) => {
    const { data } = await AJAX(app).methodV({
      url: '/users',
      params: {
        ...params,
        per_page: pageSize,
        page: pageNum,
      },
      method: 'GET',
    });
    return data;
  };

  return {
    getUserInfo,
    getUsers,
  };
};
