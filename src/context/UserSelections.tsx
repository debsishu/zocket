import React from "react";

const defaultValue = {
  name: "",
  image: "",
  createdOn: "",
  startDate: "",
  endDate: "",
  budget: "",
  location: "",
  platform: "",
};

const UserSelections = React.createContext(defaultValue);
export default UserSelections;
