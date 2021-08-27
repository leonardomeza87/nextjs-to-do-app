import Image from "next/image";

import styles from "../styles/Sidebar.module.scss";

import SyncIcon from "../../public/assets/sync.svg";
import SearchSVG from "../../public/assets/search.svg";
import TimerSVG from "../../public/assets/timer.svg";
import NotificationsSVG from "../../public/assets/notifications.svg";
import EllipsisSVG from "../../public/assets/ellipsis-horizontal.svg";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Sidebar = () => {
  const { avatar } = useContext(UserContext);

  // console.log(user.avatar);

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <Image
          loader={() => avatar}
          src={avatar}
          height={32}
          width={32}
          unoptimized
          alt={"Profile picture"}
        />
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
