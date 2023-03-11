import React from "react";
import { Typography } from "@mui/material";
import MainContext from "../components/CustomContext/Index";
import { Types } from "../Constants";
const NewsLetter = () => {
  return <MainContext type={Types.newsletter} />;
};

export default NewsLetter;
