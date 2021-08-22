import styles from "../styles/FilterSection.module.scss";
import Filter from "./Filter";
import LaterSVG from "../../public/assets/calendar.svg";
import TodaySVG from "../../public/assets/today.svg";
import TomorrowSVG from "../../public/assets/partly-sunny.svg";
import InboxSVG from "../../public/assets/file-tray.svg";
import TrashSVG from "../../public/assets/trash-bin.svg";
import CheckboxSVG from "../../public/assets/checkbox.svg";

const FilterSection = ({ section }) => {
  return (
    <div className={styles.container}>
      {section === "main" ? (
        <>
          <Filter title={"Today"} svg={<TodaySVG />} />
          <Filter title={"Tomorrow"} svg={<TomorrowSVG />} />
          <Filter title={"Next 7 Days"} svg={<LaterSVG />} />
          <Filter title={"Inbox"} svg={<InboxSVG />} />
        </>
      ) : (
        <>
          <Filter title={"Completed"} svg={<CheckboxSVG />} />
          <Filter title={"Trash"} svg={<TrashSVG />} />
        </>
      )}
    </div>
  );
};

export default FilterSection;
