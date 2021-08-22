import styles from "../styles/PinArea.module.scss";
import Pin from "./Pin";

const PinArea = () => {
  return (
    <div className={styles.container}>
      <div className={styles.area}>
        <div className={styles.pinArea}>
          <Pin />
          <Pin />
          <Pin />
          <Pin />
          <Pin />
          <Pin />
          <Pin />
          <Pin />
        </div>
      </div>
    </div>
  );
};

export default PinArea;
