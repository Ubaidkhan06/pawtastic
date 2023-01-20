import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import CustomTextField from "../../Components/CustomTextField";
import theme from "../../styles/theme";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useContext, useState } from "react";
import { petContext } from "../Signupthird";

const Morebasics = () => {
  const data = useContext(petContext);

  console.log(data);

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.neutral.lightPink,
        }}
        padding={"5rem 7rem 6rem 7rem"}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          color={theme.palette.neutral.navy}
          paddingBottom={"2rem"}
        >
          Yay, we love dogs! Give us the basics about your pup.
        </Typography>
        <Grid container columnSpacing={6} rowSpacing={3}>
          <Grid item xs={6}>
            <CustomTextField
              label={"Name"}
              placeholder={"Pet's Name"}
              value={data.name}
              onChange={(e) =>
                data.setPetData({ ...data, name: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={6} display={"flex"} alignItems={"end"}>
            <IconButton
              sx={{ color: theme.palette.neutral.gray }}
              aria-label="upload picture"
              component="label"
            >
              <input
                value={data.image}
                onChange={(e) =>
                  data.setPetData({ ...data, image: e.target.value })
                }
                hidden
                accept="image/*"
                type="file"
              />
              <PhotoCamera />
              <Typography paddingLeft={"1rem"}>Upload Photo</Typography>
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label={"Breed"}
              placeholder={"Pet's Breed"}
              value={data?.breed}
              onChange={(e) =>
                data.setPetData({ ...data, breed: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField label={"Birthday"} placeholder={"MM/DD/YYYY"} />
          </Grid>
          <Grid item xs={6}>
            <label style={{ color: theme.palette.neutral.gray }}>Gender</label>
            <Box
              display={"flex"}
              gap={3}
              bgcolor="white"
              justifyContent={"space-between"}
              padding="0.5rem"
            >
              <Box
                bgcolor={data.gender === 'Female' ? theme.palette.neutral.pink : 'white'}
                sx={{
                  color: theme.palette.neutral.navy,
                  padding: "0.2rem 2rem",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={(e) => data.setPetData({ ...data, gender: "Female" })}
              >
                Female
              </Box>
              <Box
                sx={{
                  color: theme.palette.neutral.navy,
                  padding: "0.2rem 2rem",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                bgcolor={data.gender === 'Male' ? theme.palette.neutral.pink : 'white'}
                onClick={(e) => data.setPetData({ ...data, gender: "Male" })}
              >
                Male
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Morebasics;
