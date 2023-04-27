import React from "react";
import Hoc from "./Hoc";
const UserList = ({ data }) => {
  let usersList = data.map((item) => {
    return <div key={item.id}>{item.name}</div>;
  });
  return <div className="container">{usersList}</div>;
};
const SearchUsers = Hoc(UserList, "users");
export default SearchUsers;
