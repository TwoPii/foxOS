import App from "../definitions/App";
import PenIcon from "@/assets/icons/pen.svg?react";
import PcIcon from "@/assets/icons/pc.svg?react";
export const apps: App[] = [
  {
    id: 1,
    loader: "@/components/editor/Editor",
    name: "Editor",
    icon: PenIcon,
    createdBy: "system",
    createdOn: "",
    parentId: 0,
  },
  {
    id: 2,
    loader: "@/components/system/System",
    name: "System",
    icon: PcIcon,
    createdBy: "system",
    createdOn: "",
    parentId: 0,
  },
];
