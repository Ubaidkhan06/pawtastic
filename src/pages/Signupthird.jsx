import { Box } from "@mui/system";
import React from "react";
import sidebarimg from "../assets/images/signup2.png";
import logo from "../assets/images/logo.png";
import theme from "../styles/theme";
import { Grid, Typography } from "@mui/material";
import VerticalLinearStepper from "../Components/Stepper";
import CustomTextField from "../Components/CustomTextField";
import { StyledButton } from "./HomePage";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    label: "Human Profile",
  },
  {
    label: "Pet Basics",
  },
  {
    label: "Pet Details",
  },
  {
    label: "Confirm",
  },
];

const Signupthird = () => {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
        <Box
          sx={{
            position: "relative",
            display: { xs: "none", lg: "flex", md: "flex" },
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
              display: { xs: "none", md: "flex", lg: "flex" },
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" fontWeight={700}>
              <VerticalLinearStepper activeStep={activeStep} steps={steps} />
            </Typography>
          </Box>
        </Box>
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
          padding={"4rem 7rem 5rem 7rem"}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            color={theme.palette.neutral.navy}
            paddingBottom={"2rem"}
          >
            Hello! Please tell us about yourself
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth={true}
                placeholder={"Your First Name"}
                label={"First Name"}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth={true}
                placeholder={"Your Last Name"}
                label={"Last Name"}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth={true}
                placeholder={"000 000 0000"}
                label={"Phone"}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth={true}
                placeholder={"000 000 0000"}
                label={"Landline"}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                fullWidth={true}
                placeholder={"Placeholder Text"}
                label={"Label"}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth={true}
                placeholder={"City"}
                label={"City"}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomTextField
                fullWidth={true}
                placeholder={"State"}
                label={"State"}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomTextField
                fullWidth={true}
                placeholder={"0000"}
                label={"Zip"}
              />
            </Grid>
          </Grid>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <StyledButton
              bgColor={"white"}
              textColor={theme.palette.neutral.navy}
              pl={"5rem"}
              pr={"5rem"}
              onClick={() => handleBack()}
              variant={"outlined"}
              sx={{
                borderColor: theme.palette.neutral.navy,
                "&:hover": {
                  borderColor: theme.palette.neutral.navy,
                },
              }}
              disabled={activeStep === 0 ? true : false}
            >
              Back
            </StyledButton>
          </Box>
          <Box>
            <StyledButton
              bgColor={theme.palette.neutral.navy}
              textColor={"white"}
              pl={"5rem"}
              pr={"5rem"}
              onClick={() => handleNext()}
              disabled={activeStep === steps.length - 1 ? true : false}
            >
              Next
            </StyledButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signupthird;
