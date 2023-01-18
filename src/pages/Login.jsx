import { Checkbox, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomTextField from "../Components/CustomTextField";
import Sidebar from "../Components/Sidebar";
import theme from "../styles/theme";
import { StyledButton, StyledLink } from "./HomePage";
import { Link } from "react-router-dom";

const Login = () => {

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
        <Sidebar heading={"Welcome"} />
      </Box>
      <Box
        sx={{
          flex: 3,
        }}
      >
        <Box
          bgcolor={theme.palette.neutral.lightPink}
          padding={"6rem 6rem 2rem 6rem"}
        >
          <Stack spacing={4}>
            <Typography variant="h3" color={theme.palette.neutral.navy}>
              Good news! We care for pets in Winter Park. Let’s create your
              account.
            </Typography>
            <CustomTextField
              fullWidth={true}
              label={"Email Id"}
              id={"emailid"}
              placeholder={"Enter Email"}
              type={"email"}
            />
            <CustomTextField
              fullWidth={true}
              label={"Password"}
              id={"password"}
              placeholder={"Enter Password"}
              type={"password"}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox />
              <Typography variant="p" color={theme.palette.neutral.gray}>
                I have read the Privacy Policy and agree to the Terms of
                Service.
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          columnGap={2}
        >
          <Box display={"flex"} gap={1} paddingLeft="6rem">
            <Typography color={theme.palette.neutral.gray}>
              Not a member ?
            </Typography>
            <Typography color={theme.palette.neutral.navy}>
              <StyledLink to="/signup">Sign up</StyledLink>
            </Typography>
          </Box>
          <StyledButton
            pr={"4rem"}
            pl={"4rem"}
            bgColor={theme.palette.neutral.navy}
            textColor="white"
          >
            Login
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
