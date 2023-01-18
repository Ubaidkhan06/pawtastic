import { Box } from "@mui/system";
import React from "react";
import sidebarimg from "../assets/images/sidebarimg.png";
import logo from "../assets/images/logo.png";
import theme from "../styles/theme";
import { Typography } from "@mui/material";

const Sidebar = ({ heading }) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <img
        style={{
          height: "100vh",
          width: "100%",
        }}
        src={sidebarimg}
        alt="sidebarimg"
      />
      <Box
        sx={{
          position: "absolute",
          top: "5rem",
          left: "6rem",
          display: { xs: "none", lg: "flex", md: "flex" },
          alignItems: "center",
        }}
      >
        <Box
          bgcolor={theme.palette.neutral.darkPink}
          borderRadius={"100%"}
          height="3rem"
          width={"3rem"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src={logo} />
        </Box>
        <Typography
          paddingLeft={"1rem"}
          color="white"
          variant="h6"
          letterSpacing={4}
        >
          PAWTASTIC
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "8rem",
          left: "6rem",
          marginTop: "2rem",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          {heading}
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "12rem",
          left: "4rem",
          marginTop: "2rem",
          color: "white",
          display: "flex",
          flexDirection: "column",
          width : '15rem'
        }}
      >
        <Typography variant="h6">
          <ul>
            <li>
              <Typography>
                We’re animal lovers backed by insurance and experience
              </Typography>
            </li>
            <li>
              <Typography>
                We’re animal lovers backed by insurance and experience
              </Typography>
            </li>
            <li>
              <Typography>
                We’re animal lovers backed by insurance and experience
              </Typography>
            </li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
