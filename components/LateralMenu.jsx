import s from "../styles/LateralMenu.module.scss";
import MenuSVG from "/public/assets/menu.svg";
import CalendarSVG from "/public/assets/calendar.svg";
import Filter from "./Filter";
import FilterSection from "./FilterSection";
import ListSection from "./ListSection";
import PinArea from "./PinArea";

const LateralMenu = () => {
  return (
    <div className={s.container}>
      <PinArea />
      <div className={s.mainContainer}>
        <div className={s.main}>
          <FilterSection section="main" />
          <ListSection />
          <FilterSection />
        </div>
        <div className={s.spam}>
          <p>Buy the premium!</p>
        </div>
      </div>
    </div>
  );
};

export default LateralMenu;
