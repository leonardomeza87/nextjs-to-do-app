import React from "react";
import Views from "../../components/views/Views";
import styles from "../../styles/App.module.scss";

const App = ({ data }) => {
  const UserData = React.createContext(data);

  console.log(data);

  return (
    <div className={styles.app}>
      <UserData.Provider value={data}>
        <Views />
      </UserData.Provider>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://tdap-db.herokuapp.com/users/1`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default App;
