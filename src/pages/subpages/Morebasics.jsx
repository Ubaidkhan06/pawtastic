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
        padding={"3rem 7rem 3rem 7rem"}
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
              required={true}
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
              mt="0.5rem"
            >
              <Box
                bgcolor={
                  data.gender === "Female"
                    ? theme.palette.neutral.pink
                    : "white"
                }
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
                bgcolor={
                  data.gender === "Male" ? theme.palette.neutral.pink : "white"
                }
                onClick={(e) => data.setPetData({ ...data, gender: "Male" })}
              >
                Male
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <label style={{ color: theme.palette.neutral.gray }}>
              Spayed or Neutered
            </label>
            <Box
              display={"flex"}
              gap={3}
              bgcolor="white"
              justifyContent={"space-between"}
              padding="0.5rem"
              mt="0.5rem"
            >
              <Box
                bgcolor={
                  data.spayedOrNeutered === "Yes"
                    ? theme.palette.neutral.pink
                    : "white"
                }
                sx={{
                  color: theme.palette.neutral.navy,
                  padding: "0.2rem 3rem",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={(e) =>
                  data.setPetData({ ...data, spayedOrNeutered: "Yes" })
                }
              >
                Yes
              </Box>
              <Box
                sx={{
                  color: theme.palette.neutral.navy,
                  padding: "0.2rem 3rem",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                bgcolor={
                  data.spayedOrNeutered === "No"
                    ? theme.palette.neutral.pink
                    : "white"
                }
                onClick={(e) =>
                  data.setPetData({ ...data, spayedOrNeutered: "No" })
                }
              >
                No
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <label style={{ color: theme.palette.neutral.gray }}>Weight</label>
            <Box
              display={"flex"}
              gap={3}
              bgcolor="white"
              justifyContent={"space-between"}
              padding="0.5rem"
              mt="0.5rem"
            >
              <Box
                bgcolor={
                  data.weight === "10-20"
                    ? theme.palette.neutral.pink
                    : "white"
                }
                sx={{
                  color: theme.palette.neutral.navy,
                  padding: "0.2rem 0.5rem",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={(e) =>
                  data.setPetData({ ...data, weight: "10-20" })
                }
              >
                10-20 Pounds
              </Box>
              <Box
                sx={{
                  color: theme.palette.neutral.navy,
                  padding: "0.2rem 0.5rem",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                bgcolor={
                  data.weight === "20-50"
                    ? theme.palette.neutral.pink
                    : "white"
                }
                onClick={(e) =>
                  data.setPetData({ ...data, weight: "20-50" })
                }
              >
                20-50 Pounds
              </Box>
              <Box
                sx={{
                  color: theme.palette.neutral.navy,
                  padding: "0.2rem 0.5rem",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                bgcolor={
                  data.weight === "50-100"
                    ? theme.palette.neutral.pink
                    : "white"
                }
                onClick={(e) =>
                  data.setPetData({ ...data, weight: "50-100" })
                }
              >
                50-100 Pounds
              </Box>
              <Box
                sx={{
                  color: theme.palette.neutral.navy,
                  padding: "0.2rem 0.5rem",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                bgcolor={
                  data.weight === "100+"
                    ? theme.palette.neutral.pink
                    : "white"
                }
                onClick={(e) =>
                  data.setPetData({ ...data, weight: "100+" })
                }
              >
                100+ Pounds
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Morebasics;
