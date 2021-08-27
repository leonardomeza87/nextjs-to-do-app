import styles from "../styles/FilterSection.module.scss";

import Filter from "./Filter";

import TodayIcon from "../../public/assets/today.svg";
import TomorrowIcon from "../../public/assets/partly-sunny.svg";
import LaterIcon from "../../public/assets/calendar.svg";
import InboxIcon from "../../public/assets/file-tray.svg";
import CheckboxIcon from "../../public/assets/checkbox.svg";
import TrashIcon from "../../public/assets/trash-bin.svg";

const FilterSection = ({ section }) => {
  return (
    <div className={styles.container}>
      {section === "main" ? (
        <>
          <Filter filter="today" title="Today" svg={<TodayIcon />} />
          <Filter filter="tomorrow" title="Tomorrow" svg={<TomorrowIcon />} />
          <Filter filter="week" title="Next 7 Days" svg={<LaterIcon />} />
          <Filter filter="unlisted" title="Inbox" svg={<InboxIcon />} />
        </>
      ) : (
        <>
          <Filter filter="completed" title="Completed" svg={<CheckboxIcon />} />
          <Filter filter="trash" title="Trash" svg={<TrashIcon />} />
        </>
      )}
    </div>
  );
};

export default FilterSection;
