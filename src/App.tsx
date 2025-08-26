import styles from "./App.module.scss";
import Programs from "./components/programs/Programs";

const App = () => {
  return (
    <div className={styles.container}>
      <Programs />
    </div>
  );
};

export default App;
