import interact from "interactjs";
import React, { forwardRef, useEffect, useRef } from "react";

export interface ResizableCardProps {
  children?: React.ReactNode;
  position?: { x: number; y: number };
  style?: React.CSSProperties;
  className?: string;
  minWidth?: number;
  minHeight?: number;
  edgesColor: string;
}

const ResizableCard = forwardRef<HTMLDivElement, ResizableCardProps>(
  (
    {
      children = <div style={{ padding: 20 }}>Drag me</div>,
      position = { x: 0, y: 0 },
      style = {},
      className = "",
      minWidth = 80,
      minHeight = 60,
      edgesColor = "white",
    },
    ref
  ) => {
    const localRef = useRef<HTMLDivElement>(null);
    React.useImperativeHandle(ref, () => localRef.current!);

    const enable = () => {
      interact(localRef.current as unknown as HTMLDivElement).resizable({
        edges: {
          left: true,
          right: true,
          bottom: ".bottom-selector",
          top: ".top-selector",
        },

        listeners: {
          move(event) {
            const target = event.target;
            let x = parseFloat(target.getAttribute("data-x")) || 0;
            let y = parseFloat(target.getAttribute("data-y")) || 0;

            // update the element's style
            target.style.width = event.rect.width + "px";
            target.style.height = event.rect.height + "px";

            // translate when resizing from top or left edges
            x += event.deltaRect.left;
            y += event.deltaRect.top;

            target.style.transform = "translate(" + x + "px," + y + "px)";

            target.setAttribute("data-x", x);
            target.setAttribute("data-y", y);
          },
        },
        modifiers: [
          // keep the edges inside the parent
          interact.modifiers.restrictEdges({
            outer: "parent",
          }),

          // minimum size
          interact.modifiers.restrictSize({
            min: { width: minWidth, height: minHeight },
          }),
        ],

        inertia: true,
      });
    };

    useEffect(() => enable());

    return (
      <div
        ref={localRef}
        className={`draggable-card ${className}`}
        style={{
          position: "absolute",
          width: minWidth,
          height: minHeight,
          ...style,
          left: position.x,
          top: position.y,
          userSelect: "none",
          borderRadius: "10px",
        }}
      >
        <div
          className="top-selector selector"
          style={{
            flexGrow: 1,
            maxHeight: "2px",
            backgroundColor: edgesColor,
            margin: "0px 5px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexGrow: 1,
          }}
        >
          <div
            className="left-selector selector"
            style={{
              flexGrow: 1,
              maxWidth: "2px",
              backgroundColor: edgesColor,
              margin: "5px 0px",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            {children}
          </div>
          <div
            className="right-selector selector"
            style={{
              flexGrow: 1,
              maxWidth: "2px",
              backgroundColor: edgesColor,
              margin: "50px 0px",
            }}
          ></div>
        </div>
        <div
          className="bottom-selector selector"
          style={{
            flexGrow: 1,
            maxHeight: "2px",
            backgroundColor: edgesColor,
            margin: "0px 50px",
          }}
        ></div>
      </div>
    );
  }
);

export default ResizableCard;
