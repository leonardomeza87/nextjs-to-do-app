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
  const user = useContext(UserContext);
  const { avatar } = user;

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
        <button
          onClick={() => {
            user.setContext({
              ...user,
              avatar:
                "https://images.unsplash.com/photo-1602620502036-e52519d58d92?ixid=MnwyMDU4NzZ8MHwxfGFsbHx8fHx8fHx8fDE2MTc5MTAzMTc&ixlib=rb-1.2.1&fm=jpg&q=85&fit=crop&w=1200&h=675",
            });
          }}
        >
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
