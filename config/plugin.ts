import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  helper: {
    enable: true,
    package: 'egg-helper',
  },
  static: true,
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};

export default plugin;
