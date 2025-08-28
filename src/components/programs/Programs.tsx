import { useEffect, useState } from "react";
import Window from "../window/Window";
import Editor from "../editor/Editor";
import LaunchBar from "../launch-bar/LaunchBar";
import styles from "./Programs.module.scss";
import type { Program } from "./Program";
import PenIcon from "../../assets/icons/pen.svg?react";
import PCIcon from "../../assets/icons/pc.svg?react";
import System from "../system/System";

const initialPrograms: Program[] = [
  {
    pid: 1,
    isOpen: true,
    isMinimized: false,
    appId: 1,
    loader: <Editor />,
    title: "Editor",
    icon: PenIcon,
  },
  {
    pid: 2,
    isOpen: true,
    isMinimized: false,
    appId: 2,
    loader: <System />,
    title: "System",
    icon: PCIcon,
  },
];

const Programs = () => {
  const setOrderedPrograms = (programs: Program[]) =>
    setPrograms(programs.sort((a, b) => a.appId - b.appId));

  const [programs, setPrograms] = useState<Program[]>([]);
  useEffect(() => setPrograms(initialPrograms), []);

  const onClose = (program: Program) => {
    setOrderedPrograms([
      ...programs.filter((p) => p.pid != program.pid),
      { ...program, isOpen: false },
    ]);
  };

  const onMinimize = (program: Program) => {
    setOrderedPrograms([
      ...programs.filter((p) => p.pid != program.pid),
      { ...program, isMinimized: true },
    ]);
  };

  const onClick = (program: Program) => {
    if (program.isMinimized) program.isMinimized = false;
    else if (!program.isOpen) program.isOpen = true;
    setOrderedPrograms([
      ...programs.filter((p) => p.pid != program.pid),
      { ...program },
    ]);
  };

  return (
    <>
      <div className={styles.mainSpace}>
        {programs.map((program) => {
          if (program.isOpen)
            return (
              <Window
                key={"window_" + program.pid}
                program={program}
                onClose={() => onClose(program)}
                onMinimize={() => onMinimize(program)}
                isMinimized={program.isMinimized}
              ></Window>
            );
        })}
      </div>
      <LaunchBar programs={programs} onClick={onClick} />
    </>
  );
};

export default Programs;
