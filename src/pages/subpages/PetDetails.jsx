import { CustomCheckbox } from "../../Components/Checkboxfeild";
import {
  Box,
  FormControlLabel,
  Grid,
  Typography,
  Checkbox,
  Link,
} from "@mui/material";
import React, { useContext } from "react";
import theme from "../../styles/theme";
import { petContext } from "../Signupthird";
import CustomTextField from "../../Components/CustomTextField";

const PetDetails = ({ handleNext }) => {
  const data = useContext(petContext);

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.neutral.lightPink,
        }}
        padding={"3rem 7rem 1rem 7rem"}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={600}
            color={theme.palette.neutral.navy}
            paddingBottom={"2rem"}
          >
            Thanks! Now give us all the details about {data.name}.
          </Typography>
        </Box>

        <Box>
          <CustomCheckbox />
        </Box>

        <Box padding={'1rem 0rem'}>
          <CustomTextField
            label={"Pet Details"}
            placeholder={"Enter Description"}
            multiline={true}
            rows={3}
          />
        </Box>

        <Box>
          <CustomTextField
            label={"Any Pet Habits"}
            placeholder={"Enter Description"}
            multiline={true}
            rows={3}
          />
        </Box>

        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={'1rem'}>
          <Link sx={{color : theme.palette.neutral.navy}} onClick={e => handleNext()}>Skip</Link>
        </Box>
      </Box>
    </>
  );
};

export default PetDetails;
