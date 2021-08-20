import Image from "next/image";
import s from "../styles/Sidebar.module.scss";
import CheckboxSVG from "/public/assets/checkbox.svg";
import CalendarSVG from "/public/assets/calendar.svg";
import SearchSVG from "/public/assets/search.svg";
import TimerSVG from "/public/assets/timer.svg";
import NotificationsSVG from "/public/assets/notifications.svg";
import EllipsisSVG from "/public/assets/ellipsis-horizontal.svg";

const Sidebar = ({ profilePic }) => {
  return (
    <div className={s.container}>
      <div className={s.profile}>
        <Image src={profilePic} alt="Profile Picture" height={32} width={32} />
      </div>
      <div className={s.icons}>
        <button>
          <CheckboxSVG />
        </button>
        <button>
          <SearchSVG />
        </button>
      </div>
      <div className={s.secondIconPack}>
        <div className={s.icons}>
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
