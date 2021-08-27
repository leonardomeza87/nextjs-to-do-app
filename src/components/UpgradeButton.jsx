import styles from "../styles/UpgradeButton.module.scss";

import ChevronIcon from "../../public/assets/chevron-forward.svg";
import RocketIcon from "../../public/assets/rocket.svg";

const UpgradeButton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <RocketIcon />
      </div>
      <p>Upgrade to premium!</p>
      <div className={styles.iconContainer}>
        <ChevronIcon />
      </div>
    </div>
  );
};

export default UpgradeButton;
