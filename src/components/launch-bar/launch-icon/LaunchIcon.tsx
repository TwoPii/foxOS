import type { Program } from "../../programs/Programs";
import styles from "./LaunchIcon.module.scss";
type ILaunchIconProps = {
  program: Program;
};

const LaunchIcon = ({ program }: ILaunchIconProps) => {
  return <div className={styles.launchIcon}>{program.title}</div>;
};
export default LaunchIcon;
