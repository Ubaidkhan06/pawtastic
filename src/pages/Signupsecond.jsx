import {
  Checkbox,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomTextField from "../Components/CustomTextField";
import Sidebar from "../Components/Sidebar";
import theme from "../styles/theme";
import { StyledButton, StyledLink } from "./HomePage";

const Signupsecond = () => {
  const navigate = useNavigate();

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
          padding={"5rem 7rem 5rem 7rem"}
        >
          <Typography
            variant="h3"
            color={theme.palette.neutral.navy}
            fontWeight={600}
          >
            Good news! We care for pets in Winter Park. Let’s create your
            account.
          </Typography>
          <Box textAlign={"start"}>
            <CustomTextField
              label={"Email ID"}
              placeholder={"Enter Email Id"}
              fullWidth={true}
              type={"email"}
            />
            <Grid container spacing={2} mt={"1rem"}>
              <Grid item xs={6}>
                <CustomTextField
                  label={"Password"}
                  placeholder={"Enter Password"}
                  fullWidth={true}
                  type={"password"}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomTextField
                  label={"Confirm Password"}
                  placeholder={"Confirm Password"}
                  fullWidth={true}
                  type={"password"}
                />
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Checkbox />
            <Typography variant="p" color={theme.palette.neutral.gray}>
              I have read the Privacy Policy and agree to the Terms of Service.
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent="space-between"
          paddingLeft={"6rem"}
        >
          <Box display={"flex"} alignItems={'center'}>
            <Box display={'flex'}>
                <Typography color={theme.palette.neutral.gray}>
                    Already a Member? 
                </Typography>
                <Typography paddingLeft={'1rem'} color={theme.palette.neutral.navy}>
                    <StyledLink to={'/login'}>Log in</StyledLink>
                </Typography>
            </Box>
          </Box>
          <Box textAlign={"end"}>
            <StyledButton
              bgColor={theme.palette.neutral.navy}
              textColor={"white"}
              pl={"5rem"}
              pr={"5rem"}
              onClick={() => navigate("/signupthird")}
            >
              Next
            </StyledButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signupsecond;
