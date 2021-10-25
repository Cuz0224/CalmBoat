const nodemailer = require('nodemailer');

// interface mailInterface {
//   data: string;
//   to: string;
//   subject: string;
// }

const sendEmail = async mailOptions => {
  const {
    data,
    to,
    subject,
  } = mailOptions;
  const transporter = nodemailer.createTransport({
    service: 'QQ', // 发送者的邮箱厂商，支持列表：https://nodemailer.com/smtp/well-known/
    port: 465, // SMTP 端口
    secureConnection: true, // SSL安全链接
    auth: { // 发送者的账户密码
      user: '1903550725@qq.com', // 账户
      pass: 'sjptsysxvhjzbbjd', // smtp授权码，到邮箱设置下获取
    },
  });
  const mailOpts = {
    from: '"cnz" <1903550725@qq.com>', // 发送者昵称和地址
    to, // 接收者的邮箱地址
    subject, // 邮件主题
    html: data,
  };
  // 发送邮件
  transporter.sendMail(mailOpts, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('邮件发送成功 ID：', info.messageId);
  });
};
// 这里是 nickName, createTime, link 通过 api 返回的参数进行动态填写的
// const nickName = '严先生的博客';
// const createTime = '2021-01-26 15:20';
// const link = 'http://blog.lovemysoul.vip';

const data = `<img style="width:100px;" src="http://blog.lovemysoul.vip/favicon.ico" alt="logo"/>
      <p style="text-indent: 2em;">亲爱的  </p>
      <p style="text-indent: 2em;">您在 申请的 交换友链已经审核通过！已经自动创建成功！可以前往 <a href="http://blog.lovemysoul.vip/Friendship.html">悲伤日记</a> 进行查看。感谢您的支持！</p>
      <p style="text-indent: 2em;">祝您工作顺利，心想事成</p>
      <p style="text-align: right;">—— 悲伤日记</p>
      <p>如有疑问可以关注悲伤日记微信公众号进行协调 </p>
      <img style="width:150px" src="http://blog.lovemysoul.vip/_assets/beishang.0aa26ed3.jpg" alt="公众号二维码" srcset="">
  `;
// sendEmail({ data, to: '1142484265@qq.com', subject: 'test' });

// export default { sendEmail };

