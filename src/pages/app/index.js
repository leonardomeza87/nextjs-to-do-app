import React, { useState } from "react";

import styles from "../../styles/App.module.scss";

import Views from "../../components/views/Views";
import { UserContext } from "../../contexts/UserContext";
import { TimeContext } from "../../contexts/TimeContext";

const App = ({ userData, time }) => {
  // userData = { ...userData, lasUpdate: time.fullTime };

  if (typeof window !== "undefined") {
    localStorage.setItem("user-data", JSON.stringify(userData));
  }

  console.log(time.date);

  const [data, setData] = useState(userData);
  const value = { data, setData };

  return (
    <div className={styles.app}>
      <UserContext.Provider value={value}>
        <TimeContext.Provider value={time}>
          <Views />
        </TimeContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  const response = await fetch(`https://tdap-db.herokuapp.com/users/1`);
  const userData = await response.json();

  const response2 = await fetch(`http://worldclockapi.com/api/json/utc/now`);
  const { currentDateTime } = await response2.json();

  const time = {
    fullTime: new Date(currentDateTime).getTime(),
    date: currentDateTime.slice(0, 10),
    hour: currentDateTime.slice(11, -1),
  };

  // Pass data to the page via props
  return { props: { userData, time } };
}
