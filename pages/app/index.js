import Link from "next/link";
import LateralMenu from "../../components/LateralMenu";
import Sidebar from "../../components/Sidebar";
import Views from "../../components/Views";
import styles from "../../styles/App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.lateral}>
        <Sidebar profilePic="/assets/profile.png" />
        <LateralMenu />
      </div>
      <Views />
    </div>
  );
};

export default App;
