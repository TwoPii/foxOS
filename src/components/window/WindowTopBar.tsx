import { useRef } from "react";
import classNames from "../utils/classNames.utils";
import styles from "./WindowTopBar.module.scss";

const WindowTopBar = ({
  title,
  onClose,
  onMouseDown,
}: {
  title: string;
  onClose: () => void;
  onMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
}) => {
  const elemRef = useRef(null);

  return (
    <div ref={elemRef} className={styles.topBar}>
      <div className={styles.buttons}>
        <div
          className={classNames(styles.button, styles.close)}
          onClick={onClose}
        >
          x
        </div>
        <div className={classNames(styles.button, styles.minimize)}>-</div>
        <div className={classNames(styles.button, styles.expand)}>{">"}</div>
      </div>
      <div className={styles.title} onMouseDown={onMouseDown}>
        {title}
      </div>
    </div>
  );
};

export default WindowTopBar;
