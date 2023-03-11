import React from "react";
import { Outlet } from "react-router-dom";
import CustomAppBar from "../CustomAppBar/Index";
import Footer from "../CustomFooter/Index";
import { Box } from "@mui/material";
const Layout = ({ ColorModeContext }: any) => {
  return (
    <div>
      <CustomAppBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 5,
          width: "100%",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};

export default Layout;
