import { Folder } from "./Folder";

interface File extends Folder {
  contents: string;
}

export default File;
