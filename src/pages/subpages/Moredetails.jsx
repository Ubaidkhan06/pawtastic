import React from "react";
import theme from "../../styles/theme";
import { Box, Typography, Stack, Grid } from "@mui/material";
import CustomTextField from "../../Components/CustomTextField";

const Moredetails = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.neutral.lightPink,
        }}
        padding={"5rem 7rem 9rem 7rem"}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          color={theme.palette.neutral.navy}
          paddingBottom={"2rem"}
        >
          Got a preffered Vet? Let us know
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <CustomTextField label={"Veterinarian's Name"} placeholder={"Veterinarian's  name"}/>
          </Grid>
          <Grid item xs={6}>
            <CustomTextField label={"Veterinarian's Phone Number"} placeholder={"000-000-0000"}/>
          </Grid>
          <Grid item xs={12}>
            <CustomTextField label={"Address"} placeholder={"Veterinarian's  name"}/>
          </Grid>
          <Grid item xs={6}>
            <CustomTextField label={"City"} placeholder={"City"}/>
          </Grid>
          <Grid item xs={3}>
            <CustomTextField label={"State"} placeholder={"State"}/>
          </Grid>
          <Grid item xs={3}>
            <CustomTextField label={"Zip"} placeholder={"Zip"}/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Moredetails;
