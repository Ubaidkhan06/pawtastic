import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import CustomTextField from "../../Components/CustomTextField";
import theme from "../../styles/theme";
import { petContext } from "../Signupthird";

const HumanProfile = ({ name, setName }) => {
  const data = useContext(petContext);

  return (
    <>
      {/* human profile */}
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
              required
              fullWidth={true}
              placeholder={"Your First Name"}
              label={"First Name"}
              value={data.ownerName}
              onChange={(e) =>
                data.setPetData({ ...data, ownerName: e.target.value })
              }
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
      {/* human profile */}
    </>
  );
};

export default HumanProfile;
