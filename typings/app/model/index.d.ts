// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportStudentModel = require('../../../app/model/StudentModel');
import ExportStudentSchema = require('../../../app/model/StudentSchema');
import ExportConnection = require('../../../app/model/connection');
import ExportInsert = require('../../../app/model/insert');
import ExportQuery = require('../../../app/model/query');
import ExportUpdate = require('../../../app/model/update');

declare module 'egg' {
  interface IModel {
    StudentModel: ReturnType<typeof ExportStudentModel>;
    StudentSchema: ReturnType<typeof ExportStudentSchema>;
    Connection: ReturnType<typeof ExportConnection>;
    Insert: ReturnType<typeof ExportInsert>;
    Query: ReturnType<typeof ExportQuery>;
    Update: ReturnType<typeof ExportUpdate>;
  }
}
