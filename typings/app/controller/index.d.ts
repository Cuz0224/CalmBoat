// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBasecontroller from '../../../app/controller/basecontroller';
import ExportBranch from '../../../app/controller/branch';
import ExportHome from '../../../app/controller/home';
import ExportProject from '../../../app/controller/project';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    basecontroller: ExportBasecontroller;
    branch: ExportBranch;
    home: ExportHome;
    project: ExportProject;
    user: ExportUser;
  }
}
