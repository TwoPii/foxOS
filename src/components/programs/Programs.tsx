import { useEffect, useState, type JSX } from "react";
import Window from "../window/Window";
import Editor from "../editor/Editor";

export type Program = {
  pid: number;
  isOpen: boolean;
  isMinimized: boolean;
  appId: number;
  loader: JSX.Element;
  title: string;
};

const initialPrograms = [
  {
    pid: 1,
    isOpen: true,
    isMinimized: false,
    appId: 1,
    loader: <Editor />,
    title: "Editor",
  },
  {
    pid: 2,
    isOpen: true,
    isMinimized: false,
    appId: 2,
    loader: <p>Test</p>,
    title: "Test App",
  },
];

const Programs = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  useEffect(() => setPrograms(initialPrograms), []);

  const onClose = (program: Program) => {
    setPrograms([
      ...programs.filter((p) => p.pid != program.pid),
      { ...program, isOpen: false },
    ]);
  };

  return (
    <>
      {programs.map((program) => {
        if (program.isOpen && !program.isMinimized)
          return (
            <Window
              key={"window_" + program.pid}
              program={program}
              onClose={() => onClose(program)}
            ></Window>
          );
      })}
    </>
  );
};

export default Programs;
