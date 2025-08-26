import { useState } from "react";
import styles from "./Editor.module.scss";

const Editor = () => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("Hello from the editor!");
  return (
    <textarea
      className={styles.container}
      value={text}
      onChange={onChange}
    ></textarea>
  );
};

export default Editor;
