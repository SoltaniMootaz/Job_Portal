import React from "react";
import { Typography } from "@mui/material";
import MainContext from "../components/CustomContext/Index";
import { Types } from "../Constants";
const Hire = () => {
  return (
    <div>
      <MainContext type={Types.hire} />
    </div>
  );
};

export default Hire;
