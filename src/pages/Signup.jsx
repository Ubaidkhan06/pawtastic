import { Checkbox, Link, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomTextField from "../Components/CustomTextField";
import Sidebar from "../Components/Sidebar";
import theme from "../styles/theme";
import { StyledButton, StyledLink } from "./HomePage";

const Signup = () => {

  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          flex: { xs: 0, lg: 2, md: 2 },
        }}
      >
        <Sidebar heading={"Why our Service ?"} />
      </Box>
      <Box
        sx={{
          flex: "3",
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.neutral.lightPink,
          }}
          padding={"10rem 15rem 10rem 15rem"}
        >
          <Typography
            variant="h3"
            color={theme.palette.neutral.navy}
            fontWeight={600}
          >
            First, let's see if we serve your area.
          </Typography>
          <Box textAlign={"start"}>
            <CustomTextField placeholder={"Zip Code"} fullWidth={false} />
          </Box>
        </Box>
        <Box textAlign={"end"}>
          <StyledButton
            bgColor={theme.palette.neutral.navy}
            textColor={"white"}
            pl={"5rem"}
            pr={"5rem"}
            onClick={() => navigate('/signupsecond')}
          >
            Next
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
