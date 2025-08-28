import type { Program } from "../../programs/Program";
import styles from "./LaunchIcon.module.scss";
type ILaunchIconProps = {
  program: Program;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const LaunchIcon = ({ program, onClick }: ILaunchIconProps) => {
  return (
    <div className={styles.launchIcon} onClick={onClick}>
      {<program.icon className={styles.icon} />}
      {(program.isMinimized || program.isOpen) && (
        <div className={styles.minimized}>
          <div className={styles.minimizedIcon} />
        </div>
      )}
      <div className={styles.toast}>{program.title}</div>
    </div>
  );
};
export default LaunchIcon;
