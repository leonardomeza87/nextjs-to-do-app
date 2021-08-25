import styles from "../styles/Pin.module.scss";
import MenuSVG from "../../public/assets/menu.svg";

const Pin = () => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <MenuSVG />
      </div>
      <p>Card</p>
    </div>
  );
};

export default Pin;
