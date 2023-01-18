import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

import { Link } from 'react-router-dom'
 
import bg from "../assets/images/bg.png";
import logo from "../assets/images/logo.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";

import { pets, card } from "../data";

import { Stack } from "@mui/system";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { backgroundColors } from "../styles/theme/backgrounds";

export const StyledButton = styled(Button)(
  ({ theme, bgColor, textColor, pl = "2rem", pr = "2rem" }) => ({
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: bgColor,
      opacity: 0.8,
    },
    paddingLeft: pl,
    paddingRight: pr,
    paddingTop: "0.5rem",
    fontWeight: 300,
    margin: "2rem 4rem",
  })
);

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
}));

const HomePage = () => {
  const theme = useTheme();
  console.log(theme.palette.neutral);

  return (
    <>
      <Box>
        <div
          style={{
            fontFamily: "henriette",
            position: "relative",
            height: "40rem",
            width: "100%",
          }}
        >
          <img height={"100%"} width={"100%"} src={bg} alt="background" />

          <Box
            sx={{
              backgroundColor: "white",
              position: "absolute",
              borderRadius: "100%",
              height: "64px",
              width: "64px",
              top: "5rem",
              left: "6rem",
            }}
          >
            <img
              style={{
                position: "relative",
                top: "0.7rem",
                left: "0.7rem",
              }}
              src={logo}
            />
          </Box>
          <h1 className="header">PAWTASTIC</h1>
          <Box
            sx={{
              position: "absolute",
              top: "9rem",
              right: "10.5rem",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Stack direction={"row"} gap={2}>
              <StyledLink to="#">
                <Typography>About us</Typography>
              </StyledLink>
              <StyledLink to="#">
                <Typography>Reviews</Typography>
              </StyledLink>
              <StyledLink to="#">
                <Typography>Services</Typography>
              </StyledLink>
              <StyledLink to="/signup">
                <Typography>Sign up</Typography>
              </StyledLink>
            </Stack>
            <div className="subheading">
              <Typography variant="h3">
                We care for your furry little loved ones while you're away
              </Typography>
            </div>
            <StyledButton
              variant="contained"
              bgColor={"white"}
              textColor={theme.palette.neutral.navy}
              sx={{ marginTop: "0.5rem" }}
            >
              Schedule a Visit
            </StyledButton>
          </Box>
        </div>
        <Box
          sx={{
            padding: "8rem 9rem",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Box
                sx={{
                  width: "22rem",
                  xs: {
                    backgroundColor: "red",
                  },
                }}
              >
                <Stack spacing={8}>
                  <Typography
                    variant="h4"
                    color={theme.palette.neutral.navy}
                    sx={{ fontWeight: 700 }}
                  >
                    Expert care for your furry, feathery, or scaley friend.
                  </Typography>
                  <Typography variant="h6" color={theme.palette.neutral.navy}>
                    We know how stressful it is to leave your pets at home
                    alone. We’re a team of experienced animal caregivers, well
                    connected to local veterinarians. Trust to us to love them
                    like our own, and to keep them safe and happy till you’re
                    home.
                  </Typography>
                  <StyledButton
                    variant="contained"
                    bgColor={theme.palette.neutral.navy}
                    textColor={"white"}
                  >
                    Schedule a visit
                  </StyledButton>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <div>
                    <img height={"250rem"} width={"100%"} src={img1} />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div>
                    <img height={"250rem"} width={"100%"} src={img2} />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div>
                    <img height={"250rem"} width={"100%"} src={img3} />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div>
                    <img height={"250rem"} width={"100%"} src={img4} />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={12} md={6} lg={6}>
              <Box height={"100%"}>
                <img height={"100%"} width={"100%"} src={img5} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box
                sx={{
                  padding: "8rem",
                  backgroundColor: theme.palette.neutral.lightPink,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Stack spacing={7}>
                  <Typography
                    variant="h4"
                    color={theme.palette.neutral.navy}
                    fontWeight={700}
                  >
                    Services tailored to your needs
                  </Typography>
                  <Typography
                    variant="h6"
                    color={theme.palette.neutral.navy}
                    height={"14rem"}
                  >
                    Schedule one-off or recurring home visits. An experienced
                    member of our team will spend time with your pet, feed them,
                    change cat litter trays, take the dog for a walk, and
                    anything else you need.
                  </Typography>
                  <StyledButton
                    variant="contained"
                    bgColor={theme.palette.neutral.navy}
                    textColor={"white"}
                  >
                    Schedule a Visit
                  </StyledButton>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.neutral.navy,
            paddingTop: "5rem",
            paddingBottom: "3rem",
            paddingRight: "4rem",
            paddingLeft: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            paddingBottom={"4rem"}
            textAlign={"center"}
            color={"white"}
            variant="h4"
          >
            Pets (and their humans) love us
          </Typography>
          <Grid container spacing={4}>
            {pets?.map((pet) => (
              <Grid xs={12} md={6} lg={6} item key={pet.name}>
                <Card sx={{ display: "flex", padding: "2rem" }}>
                  <img
                    style={{
                      paddingRight: "1rem",
                    }}
                    src={pet.img}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      textAlign={"start"}
                      fontWeight="600"
                    >
                      {pet.name}
                    </Typography>
                    <Typography
                      fontSize={"1.2rem"}
                      textAlign={"center"}
                      variant="p"
                    >
                      {pet.desc}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          <StyledButton
            bgColor={theme.palette.neutral.pink}
            textColor={theme.palette.neutral.navy}
          >
            Read all Reviews
          </StyledButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "5rem",
            alignItems: "center",
          }}
        >
          <Typography
            textAlign={"center"}
            variant={"h4"}
            color={theme.palette.neutral.navy}
            width={"25rem"}
          >
            Affordable options, tailored to your needs
          </Typography>
          <Typography
            textAlign={"center"}
            variant={"p"}
            color={theme.palette.neutral.navy}
            width={"30rem"}
            mt={"2rem"}
          >
            All services include live updates including photos and chat, as well
            as notifications of sitter arrival and departure times.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "4rem",
            }}
          >
            <Grid container spacing={12}>
              {card?.map((card) => (
                <Grid item key={card.title} xs={12} md={6} lg={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* <Box
                      sx={{
                        backgroundColor: theme.palette.neutral.lightPink,
                        position: "relative",
                        bottom: "8rem",
                        left: "10rem",
                        height: "4rem",
                        width: "4rem",
                        borderRadius: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        height={"30rem"}
                        width={"30rem"}
                        src={card.img}
                        alt={card.name}
                      />
                    </Box> */}
                    <Card
                      sx={{
                        width: "18rem",
                        boxShadow: `0.1px 0.1px 0px 0.5px ${theme.palette.neutral.navy}`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        height: "25rem",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: theme.palette.neutral.lightPink,
                          height: "5rem",
                          width: "5rem",
                          borderRadius: "5rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "2rem",
                        }}
                      >
                        <img src={card.img} />
                      </Box>
                      <Box
                        sx={{
                          padding: "2rem 4rem",
                        }}
                      >
                        <Typography
                          sx={{
                            color: theme.palette.neutral.navy,
                            fontWeight: "bold",
                          }}
                          textAlign={"center"}
                          variant={"h6"}
                        >
                          {card.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: theme.palette.neutral.navy,
                          }}
                          textAlign="center"
                        >
                          {card.desc}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          backgroundColor: theme.palette.neutral.paleBlue,
                          boxShadow: `0.1px 0.1px 0.5px 0.5px ${theme.palette.neutral.navy}`,
                          paddingTop: "2rem",
                          paddingBottom: "2rem",
                          width: "100%",
                        }}
                      >
                        <Typography
                          sx={{
                            color: theme.palette.neutral.navy,
                            fontWeight: 700,
                          }}
                          variant="h4"
                        >
                          {card.price}
                        </Typography>

                        <Typography
                          sx={{
                            color: theme.palette.neutral.gray,
                          }}
                          variant="p"
                        >
                          {card.subDesc}
                        </Typography>
                      </Box>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <StyledButton
            variant="contained"
            bgColor={theme.palette.neutral.navy}
          >
            Schedule a service
          </StyledButton>
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.neutral.lightPink,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "2rem",
          }}
        >
          <Stack marginY={"4rem"} spacing={3}>
            <Typography
              fontWeight={700}
              variant="h4"
              textAlign={"center"}
              color={theme.palette.neutral.navy}
            >
              Contact
            </Typography>
            <Typography
              fontWeight={700}
              variant="h4"
              textAlign={"center"}
              color={theme.palette.neutral.navy}
            >
              481-624-3240
            </Typography>
            <Typography
              fontWeight={700}
              variant="h4"
              textAlign={"center"}
              color={theme.palette.neutral.navy}
            >
              Email Us
            </Typography>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
