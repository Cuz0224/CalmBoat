import 'egg';

declare module 'egg' {
  interface Application{
    jwt: any; //解决报错
  }
}