import React from "react";

const userData = {
  id: 1,
  name: "User",
  email: "user@email.com",
  account_creation_date: 1629930457475,
  premium: false,
  avatar: "",
  tasks: [],
  lists: [],
};

export const UserContext = React.createContext({
  data: userData,
  setData: () => {},
});
