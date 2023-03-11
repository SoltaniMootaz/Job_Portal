import React from "react";
import { Typography } from "@mui/material";
import MainContext from "../components/CustomContext/Index";
import { Types } from "../Constants";
const Offers = () => {
  return <MainContext type={Types.offers} />;
};

export default Offers;
