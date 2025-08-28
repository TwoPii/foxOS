import File from "../definitions/File";
import { Folder } from "../definitions/Folder";

const System: (File | Folder)[] = [
  {
    id: 0,
    name: "apps",
    createdBy: "system",
    createdOn: Date.now().toString(),
    parentId: null,
  },
  {
    id: 1,
    name: "user",
    createdBy: "system",
    createdOn: Date.now().toString(),
    parentId: null,
  },
  {
    id: 2,
    name: "files",
    createdBy: "user",
    createdOn: Date.now().toString(),
    parentId: 1,
  },
  {
    id: 3,
    name: "about.txt",
    createdBy: "user",
    createdOn: Date.now().toString(),
    parentId: 2,
    contents: "Store this file safely, please!",
  },
];

export default System;
