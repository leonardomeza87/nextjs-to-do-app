import React from "react";

import styles from "../../styles/App.module.scss";

import Views from "../../components/views/Views";
import { UserContext } from "../../contexts/UserContext";
import { TimeContext } from "../../contexts/TimeContext";

const App = ({ data, time }) => {
  // export const UserData = React.createContext(data);

  // console.log(time);

  return (
    <div className={styles.app}>
      <UserContext.Provider value={data}>
        <TimeContext.Provider value={time}>
          <Views />
        </TimeContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res1 = await fetch(`https://tdap-db.herokuapp.com/users/1`);
  const data = await res1.json();

  const res2 = await fetch(`http://worldclockapi.com/api/json/utc/now`);
  let time = await res2.json();
  time = time.currentDateTime.slice(0, 10);

  // Pass data to the page via props
  return { props: { data, time } };
}

export default App;
