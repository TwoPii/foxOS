import type { Program } from "../programs/Program";
import LaunchIcon from "./launch-icon/LaunchIcon";
import styles from "./LaunchBar.module.scss";

type ILaunchBarProps = {
  programs: Program[];
  onClick: (program: Program) => void;
};
const LaunchBar = ({ programs, onClick }: ILaunchBarProps) => {
  return (
    <div className={styles.bar}>
      {programs.map((program) => {
        return (
          <LaunchIcon
            key={"launch-icon_" + program.pid}
            program={program}
            onClick={() => onClick(program)}
          />
        );
      })}
    </div>
  );
};

export default LaunchBar;
