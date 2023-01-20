import { Typography, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import CustomTextField from "../../Components/CustomTextField";
import theme from "../../styles/theme";
import dog from "../../assets/images/dogo.png";
import cat from "../../assets/images/cat-2.png";
import bird from "../../assets/images/birdy2.png";
import hamster from "../../assets/images/hamster.png";
import { useContext, useState } from "react";
import { petContext } from "../Signupthird";

const PetBasics = () => {
  const data = useContext(petContext);

  const [select, setSelect] = useState([]);

  const petImages = [
    {
      name: "Dog",
      img: dog,
    },

    {
      name: "Cat",
      img: cat,
    },

    {
      name: "Bird",
      img: bird,
    },

    {
      name: "Hamster",
      img: hamster,
    },
  ];

  //   console.log(select);

  const handleSelect = (e) => {
    console.log(e);
    if (!select.includes(e)) {
      setSelect([...select, e]);
    } else {
      let select1 = select.filter((pet) => pet !== e);
      console.log(select);
      setSelect(select1);
    }
  };

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
          Nice to meet you, {data.ownerName}. Tell us all about your furry, feathery, or
          scaley friend.
        </Typography>
        <label
          style={{
            color: theme.palette.neutral.gray,
            fontSize: "15px",
            marginBottom: "1rem",
          }}
        >
          Label
        </label>
        <Box>
          <Box bgcolor={"white"}>
            <Stack
              direction={"row"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {petImages?.map((pet) => (
                <Box
                  sx={{
                    height: "8rem",
                    width: "8rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "0.5rem",
                  }}
                  bgcolor={
                    select?.includes(pet.name)
                      ? theme.palette.neutral.pink
                      : "white"
                  }
                  onClick={(e) => handleSelect(pet.name)}
                  value={pet.name}
                >
                  <img
                    style={{
                      height: "3rem",
                    }}
                    src={pet.img}
                    alt={pet.name}
                  />
                  <Typography
                    fontSize={"1rem"}
                    fontWeight={700}
                    color={theme.palette.neutral.navy}
                  >
                    {pet.name}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
          <Typography paddingTop={"1.5rem"} color={theme.palette.neutral.navy}>
            Have multiple pets? That’s awesome. You can create additional pet
            profiles for the whole family later.
          </Typography>
          <Box>
            <Typography></Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PetBasics;
