import {
  Box,
  Paper,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import { ContextPropTypes, innerSettings } from "../../Constants";
import CustomSearchBar from "./CustomSearchBar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const CustomContextHeader = ({ type }: ContextPropTypes) => {
  const [iSettings, setISettings] = React.useState("");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleSettings = (key: string) => {
    setISettings(key);
    handleCloseNavMenu();
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 0,
          width: "100%",
          height: 75,
        },
      }}
    >
      <Paper
        variant="outlined"
        square
        elevation={1}
        sx={{
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
        }}
      >
        {" "}
        <Box
          sx={{
            flexGrow: 0,
            display: "flex",
            justifyContent: "space-between",
            m: 1.4,
          }}
        >
          <Typography
            sx={{
              ml: 3,
              mt: 1,
              display: { sm: "flex", xs: "none" },
            }}
            variant="h5"
          >
            {type} view: {iSettings}
          </Typography>
          <Box
            sx={{
              ml: 1,
              mr: 0,
              display: "flex",
              mt: 0,
              justifyContent: { xs: "space-between", md: "inherit" },
            }}
          >
            <CustomSearchBar />
            <Box
              sx={{
                mr: 3,
                ml: 2,
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block" },
                }}
              >
                {innerSettings.map((is) => (
                  <MenuItem onClick={() => handleSettings(is)} key={is}>
                    <Typography textAlign="center">{is}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default CustomContextHeader;
