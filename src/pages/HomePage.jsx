import React from "react";
import { Box, Button, Grid, Typography, Card } from "@mui/material";

import bg from "../assets/images/bg.png";
import logo from "../assets/images/logo.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import floof from "../assets/images/floof.png";
import lindsay from "../assets/images/lindsay.png";
import ginger from "../assets/images/ginger.png";
import ned from "../assets/images/ned.png";

import { Stack } from "@mui/system";
import { useTheme } from "@emotion/react";

const HomePage = () => {
  const theme = useTheme();
  console.log(theme.palette.neutral);

  const pets = [
    {
      img: lindsay,
      name: "Lindsay M",
      desc: "Pawtastic is awesome! They are passionate about pets and employ trustworthy, dependable staff. We love them!”",
    },
    {
      img: floof,
      name: "Andrew C",
      desc: "I’m a repeat customer because of their amazing care for our two cats when we travel. I can relax because I know they’re there!”",
    },
    {
      img: ginger,
      name: "Meg F",
      desc: "I use them for mid day walks and our babies are so happy with the exercise and love during the day. We see the difference!”",
    },
    {
      img: ned,
      name: "Jackle B",
      desc: "I just returned from two weeks away to a sociable, calm cat and no drama. Thanks for a great job, Pawtastic!”",
    },
  ];

  const card = [
    {
      img : 'ze',
      title : 'Dog Walk',
      desc : 'We’ll take your pup for a 30 minute walk and make sure he or she has fresh food and water.'
    },
    {
      img : 'ze',
      title : 'Drop in Visit',
      desc : 'We’ll stop by to snuggle, feed, and play with your pets in the comfort of their own home.'
    },
    {
      img : 'ze',
      title : 'House Sitting',
      desc : 'We’ll stay overnight with your pets to make sure they have round-the-clock love.'
    },
  ]


  return (
    <>
      <Box>
        <div className="banner">
          <img height={"100%"} width={"100%"} src={bg} alt="background" />

          <div className="logo-background">
            <img className="logo-image" src={logo} />
          </div>
          <h1 className="header">PAWTASTIC</h1>
          <div className="content">
            <Stack direction={"row"} gap={2}>
              <Typography>About us</Typography>
              <Typography>Reviews</Typography>
              <Typography>Services</Typography>
              <Typography>Sign up</Typography>
            </Stack>
            <div className="subheading">
              <Typography variant="h3">
                We care for your furry little loved ones while you're away
              </Typography>
            </div>
            <Button
              sx={{
                backgroundColor: "white",
                color: theme.palette.neutral.navy,
                marginTop: "1rem",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "white",
                  opacity: 0.8,
                },
              }}
              variant="contained"
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
        <Box>
          <Grid container sx={{ padding: "4rem" }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box width={"22rem"}>
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
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.neutral.navy,
                      color: "white",
                      borderRadius: "20px",
                      "&:hover": {
                        backgroundColor: theme.palette.neutral.navy,
                        opacity: 0.8,
                      },
                    }}
                  >
                    Schedule a visit
                  </Button>
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
                  padding: "5rem",
                  backgroundColor: theme.palette.neutral.lightPink,
                }}
              >
                <Typography
                  variant="h4"
                  color={theme.palette.neutral.navy}
                  fontWeight={700}
                >
                  Services tailored to your needs
                </Typography>
                <Typography variant="h6" color={theme.palette.neutral.navy}>
                  Schedule one-off or recurring home visits. An experienced
                  member of our team will spend time with your pet, feed them,
                  change cat litter trays, take the dog for a walk, and anything
                  else you need.
                </Typography>
                <Button></Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.neutral.navy,
            padding: "2rem",
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
          <Button
            sx={{
              backgroundColor: theme.palette.neutral.pink,
              color: theme.palette.neutral.navy,
              marginTop: "1rem",
              padding: "0.5rem",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: theme.palette.neutral.pink,
                opacity: 0.8,
              },
            }}
          >
            Read all Reviews
          </Button>
        </Box>
        <Box sx={{
          display :'flex',
          justifyContent:'center',
          flexDirection : 'column',
          padding : '2rem'
        }}>
          <Typography
            textAlign={"center"}
            variant={"h4"}
            color={theme.palette.neutral.navy}
          >
            Affordable options, tailored to your needs
          </Typography>
          <Typography
            textAlign={"center"}
            variant={"p"}
            color={theme.palette.neutral.navy}
          >
            All services include live updates including photos and chat, as well
            as notifications of sitter arrival and departure times.
          </Typography>
          <Box sx={{
            display:'flex',
            justifyContent : 'center'
          }}>
            {card?.map(card => (
              <Card key={card.name}>
                
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
