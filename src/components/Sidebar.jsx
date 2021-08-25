import Image from "next/image";
import styles from "../styles/Sidebar.module.scss";
import SyncIcon from "../../public/assets/sync.svg";
import SearchSVG from "../../public/assets/search.svg";
import TimerSVG from "../../public/assets/timer.svg";
import NotificationsSVG from "../../public/assets/notifications.svg";
import EllipsisSVG from "../../public/assets/ellipsis-horizontal.svg";

const Sidebar = ({ profilePic }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <Image src={profilePic} alt="Profile Picture" height={32} width={32} />
      </div>
      <div className={styles.icons}>
        <button>
          <SyncIcon />
        </button>
        <button>
          <SearchSVG />
        </button>
      </div>
      <div className={styles.secondIconPack}>
        <div className={styles.icons}>
          <button>
            <TimerSVG />
          </button>
          <button>
            <NotificationsSVG />
          </button>
          <button>
            <EllipsisSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
