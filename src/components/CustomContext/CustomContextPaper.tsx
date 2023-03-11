import React from "react";
import { Box, Paper } from "@mui/material";
import CustomContextHeader from "./CustomContextHeader";
import { ContextPropTypes } from "../../Constants";

const CustomContextPaper = ({ type }: ContextPropTypes) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 1000,
        },
      }}
    >
      <Paper
        elevation={8}
        sx={{ borderRadius: 7, borderTop: 0 }}
        variant="outlined"
      >
        <CustomContextHeader type={type} />
      </Paper>
    </Box>
  );
};

export default CustomContextPaper;
