import styles from "../styles/PinCard.module.scss";
import MenuSVG from "/public/assets/calendar.svg";

const PinCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <MenuSVG />
      </div>
      <p>Card</p>
    </div>
  );
};

export default PinCard;
