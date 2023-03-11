import React from "react";
import { ContextPropTypes } from "../../Constants";
import CustomContextPaper from "./CustomContextPaper";

const MainContext = ({ type }: ContextPropTypes) => {
  return <CustomContextPaper type={type} />;
};

export default MainContext;
