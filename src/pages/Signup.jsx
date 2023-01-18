import { Checkbox, Link, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Sidebar from "../Components/Sidebar";
import theme from "../styles/theme";
import { StyledButton, StyledLink } from "./HomePage";

const Signup = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box flex={2}>
        <Sidebar heading={'Welcome'} />
      </Box>
      <Box
        sx={{
          flex: 3,
          backgroundColor: theme.palette.neutral.lightPink,
          padding: "4rem 4rem 0rem 4rem",
          height: "37rem",
        }}
      >
        <Box>
          <Stack spacing={4}>
            <Typography variant="h3" color={theme.palette.neutral.navy}>
              Good news! We care for pets in Winter Park. Let’s create your
              account.
            </Typography>
            <div>
              <label
                style={{
                  color: theme.palette.neutral.gray,
                }}
                htmlFor="emailid"
              >
                Email ID
              </label>
              <br />
              <TextField
                fullWidth
                id="emailid"
                size="small"
                placeholder="Enter Email Id"
                sx={{
                  backgroundColor: "white",
                  marginTop: "8px",
                }}
                type="email"
              />
            </div>
            <div>
              <label
                style={{
                  color: theme.palette.neutral.gray,
                }}
                htmlFor="password"
              >
                Password
              </label>
              <br />
              <TextField
                fullWidth
                id="password"
                size="small"
                placeholder="Enter Password"
                sx={{
                  backgroundColor: "white",
                  marginTop: "8px",
                }}
                type="password"
              />
            </div>
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              //   backgroundColor: "white",
              justifyContent: "space-between",
              marginTop: "3rem",
            }}
            columnGap={2}
          >
            <Box display={"flex"} gap={1}>
              <Typography color={theme.palette.neutral.gray}>
                Not a member ?
              </Typography>
              <Typography color={theme.palette.neutral.navy}>
                <StyledLink href="#">Sign up</StyledLink>
              </Typography>
            </Box>
            <StyledButton
              bgColor={theme.palette.neutral.navy}
              textColor="white"
            >
              Login
            </StyledButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
