import { Folder } from "./Folder";

interface App extends Folder {
  loader: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default App;
