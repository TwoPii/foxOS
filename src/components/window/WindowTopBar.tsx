import { useRef, useState } from "react";
import classNames from "../utils/classNames.utils";
import styles from "./WindowTopBar.module.scss";

const WindowTopBar = ({
  title,
  onClose,
  onMouseDown,
  onMinimize,
  onExpand,
}: {
  title: string;
  onClose: () => void;
  onMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
  onMinimize: (event: React.MouseEvent<HTMLElement>) => void;
  onExpand: (event: React.MouseEvent<HTMLElement>) => void;
}) => {
  const elemRef = useRef(null);

  const [expanded, setExpanded] = useState(false);

  return (
    <div ref={elemRef} className={styles.topBar}>
      <div className={styles.buttons}>
        <div
          className={classNames(styles.button, styles.close)}
          onClick={onClose}
        >
          x
        </div>
        <div
          className={classNames(styles.button, styles.minimize)}
          onClick={onMinimize}
        >
          -
        </div>
        <div
          className={classNames(styles.button, styles.expand)}
          onClick={(e) => {
            setExpanded(!expanded);
            onExpand(e);
          }}
        >
          {!expanded && ">"}
          {expanded && "-"}
        </div>
      </div>
      <div className={styles.title} onMouseDown={onMouseDown}>
        {title}
      </div>
    </div>
  );
};

export default WindowTopBar;
