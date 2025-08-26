import ResizableCard from "../resizable-card/ResizableCard";
import WindowTopBar from "./WindowTopBar";
import type { Program } from "../programs/Programs";
import { useCallback, useRef, useState } from "react";
import { getNextZ } from "./zIndexManager";

type IWindowProps = {
  program: Program;
  onClose: () => void;
};

const Window = ({ program, onClose }: IWindowProps) => {
  const windowTarget = useRef(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 20 + program.pid * 35,
    y: 40 + program.pid * 25,
  });

  const isDragging = useRef<boolean>(false);
  const [z, setZ] = useState(1);

  const startDragPosition = useRef<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const window = document.getElementById("root")!;

  const onMouseUp = useCallback(() => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
    isDragging.current = false;
  }, []);

  const onMouseDown = useCallback((event: React.MouseEvent<HTMLElement>) => {
    startDragPosition.current = { x: event.clientX, y: event.clientY };
    isDragging.current = true;
    setZ(getNextZ());
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }, []);

  const onMouseMove = useCallback((event: MouseEvent) => {
    if (!isDragging.current) return;

    const parent = (windowTarget.current as unknown as HTMLElement)
      ?.parentElement;
    const parentRect = parent?.getBoundingClientRect();
    const selfRect = (
      windowTarget.current as unknown as HTMLElement
    )?.getBoundingClientRect();

    if (!parentRect || !selfRect) return;

    const offset = {
      x: event.clientX - startDragPosition.current.x,
      y: event.clientY - startDragPosition.current.y,
    };

    setPosition((prev) => {
      let newX = prev.x + offset.x;
      let newY = prev.y + offset.y;

      // Clamp relative to parent
      const maxX = parentRect.width - selfRect.width;
      const maxY = parentRect.height - selfRect.height;

      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;
      if (newX > maxX) newX = maxX;
      if (newY > maxY) newY = maxY;

      return { x: newX, y: newY };
    });

    // Reset drag reference point
    startDragPosition.current = { x: event.clientX, y: event.clientY };
  }, []);

  return (
    <ResizableCard
      ref={windowTarget}
      position={position}
      edgesColor="#37353E"
      style={{
        minWidth: 300,
        minHeight: 250,
        background: "#37353E",
        boxShadow: "0 6px 18px hsla(0, 0%, 0%, 0.12)",
        color: "#D3DAD9",
        display: "flex",
        flexDirection: "column",
        zIndex: z,
      }}
    >
      <WindowTopBar
        title={program.title}
        onClose={onClose}
        onMouseDown={onMouseDown}
      />
      <div
        style={{
          backgroundColor: "#44444E",
          flexGrow: 1,
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          display: "flex",
        }}
      >
        {program.loader}
      </div>
    </ResizableCard>
  );
};

export default Window;
