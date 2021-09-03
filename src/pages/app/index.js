import React, { useCallback, useEffect, useState } from "react";

import styles from "../../styles/App.module.scss";

import Views from "../../components/views/Views";
import { TimeContext } from "../../contexts/TimeContext";
import { UserContext } from "../../contexts/UserContext";

const getDefaultState = () => {
  // TODO rehydrate from local storage
  return {
    id: 1,
    name: "User",
    email: "user@email.com",
    account_creationDate: 1629930457475,
    premium: false,
    avatar:
      "https://img.poki.com/cdn-cgi/image/quality=100,width=200,height=200/b5bd34054bc849159d949d50021d8926.png",
    tasks: [],
    lists: [],
    tags: [],
  };
};

const App = ({ dbData, time }) => {
  const [data, setData] = useState(dbData);

  const setContext = useCallback(
    (updates) => {
      setData({ ...data, ...updates });
    },
    [data, setData]
  );

  const getContextValue = useCallback(
    () => ({
      ...data,
      setContext,
    }),
    [data, setContext]
  );

  return (
    <div className={styles.app}>
      <UserContext.Provider value={getContextValue()}>
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
  const dbData = await response.json();

  const response2 = await fetch(`http://worldclockapi.com/api/json/utc/now`);
  const { currentDateTime } = await response2.json();

  const time = {
    fullTime: new Date(currentDateTime).getTime(),
    date: currentDateTime.slice(0, 10),
    hour: currentDateTime.slice(11, -1),
  };

  // Pass data to the page via props
  return { props: { dbData, time } };
}
