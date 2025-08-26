import type { Program } from "../programs/Programs";
import LaunchIcon from "./launch-icon/LaunchIcon";
import styles from "./LaunchBar.module.scss";

type ILaunchBarProps = {
  programs: Program[];
};
const LaunchBar = ({ programs }: ILaunchBarProps) => {
  return (
    <div className={styles.bar}>
      {programs.map((program) => {
        return <LaunchIcon program={program} />;
      })}
    </div>
  );
};

export default LaunchBar;
