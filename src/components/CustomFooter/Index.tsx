import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Footer = () => {
  const DateJS = new Date().getFullYear();
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
            marginTop: "calc(10% + 60px)",
            width: "100%",
            position: "fixed",
            bottom: 0,
            left: 0,
            mb: 0,
          }}
        ></Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 1,
          }}
        >
          <Typography color="inherit">
            ©{DateJS} All rights reserved.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
