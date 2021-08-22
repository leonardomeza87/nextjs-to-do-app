import Sidebar from "../Sidebar";
import LateralMenu from "../LateralMenu";
import styles from "../../styles/LeftView.module.scss";

const LeftView = () => {
  return (
    <div className={styles.lateral}>
      <Sidebar profilePic="/assets/profile.png" />
      <LateralMenu />
    </div>
  );
};

export default LeftView;
