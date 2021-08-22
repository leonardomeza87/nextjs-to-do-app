import Link from "next/link";
import LateralMenu from "../../components/LateralMenu";
import Sidebar from "../../components/Sidebar";
import Views from "../../components/views/Views";
import styles from "../../styles/App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <Views />
    </div>
  );
};

export default App;
