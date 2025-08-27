import styles from "./App.module.scss";
import Programs from "./components/programs/Programs";
import Fox from "./assets/icons/fox.svg?react";

const App = () => {
  return (
    <div className={styles.container}>
      <Fox className={styles.foxBackground}></Fox>
      <Programs />
    </div>
  );
};

export default App;
