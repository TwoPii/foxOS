import type { JSX } from "react";

export type Program = {
  pid: number;
  isOpen: boolean;
  isMinimized: boolean;
  appId: number;
  loader: JSX.Element;
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};
