import styles from "../styles/PinArea.module.scss";
import PinCard from "./PinCard";

const PinArea = () => {
  return (
    <div className={styles.container}>
      <div className={styles.area}>
        <div className={styles.pinArea}>
          <PinCard />
          <PinCard />
          <PinCard />
          <PinCard />
          <PinCard />
          <PinCard />
          <PinCard />
          <PinCard />
        </div>
      </div>
    </div>
  );
};

export default PinArea;
