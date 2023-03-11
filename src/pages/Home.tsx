import React from "react";
import { Typography } from "@mui/material";
import MainContext from "../components/CustomContext/Index";
import { Types } from "../Constants";
const Home = () => {
  return <MainContext type={Types.home} />;
};

export default Home;
