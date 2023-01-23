import { Box } from "@mui/system";
import React, { createContext, useState } from "react";
import sidebarimg from "../assets/images/signup2.png";
import logo from "../assets/images/logo.png";
import theme from "../styles/theme";
import { Grid, Typography } from "@mui/material";
import VerticalLinearStepper from "../Components/Stepper";
import CustomTextField from "../Components/CustomTextField";
import { StyledButton } from "./HomePage";
import { useNavigate } from "react-router-dom";
import HumanProfile from "./subpages/HumanProfile";
import PetBasics from "./subpages/PetBasics";
import PetDetails from "./subpages/PetDetails";
import ConfirmPage from "./subpages/ConfirmPage";
import Morebasics from "./subpages/Morebasics";
import Moredetails from "./subpages/Moredetails";

const steps = [
  {
    label: "Human Profile",
  },
  {
    label: "Pet Basics",
  },
  {
    label: "More basics",
  },
  {
    label: "Pet Details",
  },
  {
    label: "More Details",
  },
  {
    label: "Confirm",
  },
];

export const petContext = createContext(undefined);

const Signupthird = () => {
  const [petData, setPetData] = useState({
    name: "",
    image: "",
    breed: "",
    gender: "",
    weight: "",
    spayedOrNeutered: "",
    ownerName: "",
    favouriteThings: [],
  });

  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <petContext.Provider
      value={{
        ...petData,
        setPetData,
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        {/* sidebar */}
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
        {/* sidebar */}

        {/* main content */}
        <Box
          sx={{
            flex: "3",
          }}
        >
          {/* conditional rendering for stepper */}
          {activeStep === 0 ? <HumanProfile /> : null}
          {activeStep === 1 ? <PetBasics /> : null}
          {activeStep === 2 ? <Morebasics /> : null}
          {activeStep === 3 ? <PetDetails handleNext={handleNext} /> : null}
          {activeStep === 4 ? <Moredetails /> : null}
          {activeStep === 5 ? <ConfirmPage /> : null}
          {/* conditional rendering for stepper */}

          {/* back next buttons */}
          <Box display={"flex"} justifyContent="space-between">
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
              {activeStep === steps.length - 1 ? (
                <StyledButton
                  type="submit"
                  bgColor={theme.palette.neutral.navy}
                  textColor={"white"}
                  pl={"5rem"}
                  pr={"5rem"}
                >
                  SignUp
                </StyledButton>
              ) : (
                <StyledButton
                  type="submit"
                  bgColor={theme.palette.neutral.navy}
                  textColor={"white"}
                  pl={"5rem"}
                  pr={"5rem"}
                  onClick={() => handleNext()}
                  disabled={activeStep === steps.length - 1 ? true : false}
                >
                  Next
                </StyledButton>
              )}
            </Box>
          </Box>

          {/* back next buttons */}
        </Box>
        {/* main content */}
      </Box>
    </petContext.Provider>
  );
};

export default Signupthird;
