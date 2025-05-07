import React from "react";
import Header from "./Header";
import { Box, Typography, Button, Paper } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import logo from "../assets/react.svg";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import img from "../assets/mainimg.png";

function Home() {
  const CardItem = [
    {
      title: "1",
      description: "This is card 1",
    },
    {
      title: "2",
      description: "This is card 2",
    },
    {
      title: "3",
      description: "This is card 2",
    },
    {
      title: "4",
      description: "This is card 2",
    },
    {
      title: "5",
      description: "This is card 2",
    },
    {
      title: "6",
      description: "This is card 2",
    },
    {
      title: "7",
      description: "This is card 2",
    },
    {
      title: "8",
      description: "This is card 2",
    },
    {
      title: "9",
      description: "This is card 2",
    },
  ];
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <Grid
          container
          spacing={5}
          maxWidth="xl"
          sx={{
            backgroundColor: "#f0f0f0",
            display: "flex",
            flexDirection: "column",
            // height: "100vh",
          }}
        >
          <Header />
          <Grid
            container
            spacing={5}
            sx={{
              padding: 2,
              // backgroundColor: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                //   backgroundColor: "#F0F0F0",
                minHeight: "50vh",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
                textAlign: "center",
              }}
            >
              {/* Highlighted Heading Block */}
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 4,
                  py: 2,
                  px: 4,
                  mb: 4,
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#FFF1DC",
                    borderRadius: 2,
                    p: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                  }}
                >
                  <BoltIcon sx={{ color: "#000" }} />
                </Box>
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{ fontWeight: 600 }}
                >
                  <Box component="span" sx={{ color: "#FFA000" }}>
                    Unlock
                  </Box>{" "}
                  Your Creative Potential
                </Typography>
              </Paper>

              {/* Subtitle */}
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  color: "#333",
                  fontWeight: 500,
                  maxWidth: "800px",
                  mb: 2,
                }}
              >
                with Online Design and Development Courses.
              </Typography>

              {/* Description */}
              <Typography
                variant="subtitle1"
                sx={{ color: "#555", maxWidth: "600px", mb: 5 }}
              >
                Learn from Industry Experts and Enhance Your Skills.
              </Typography>

              {/* Action Buttons */}
              <Stack direction="row" spacing={3}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#FFA000",
                    color: "#fff",
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#FF8F00",
                    },
                  }}
                >
                  Explore Courses
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    borderColor: "#ccc",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  View Pricing
                </Button>
              </Stack>
            </Box>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              sx={{
                height: "70px",
                width: "90%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Box
                sx={{
                  width: "140px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={logo} alt="" />
              </Box>
              <Box
                sx={{
                  width: "140px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={logo} alt="" />
              </Box>
              <Box
                sx={{
                  width: "140px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={logo} alt="" />
              </Box>

              <Box
                sx={{
                  width: "140px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={logo} alt="" />
              </Box>
              <Box
                sx={{
                  width: "140px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={logo} alt="" />
              </Box>
              <Box
                sx={{
                  width: "140px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={logo} alt="" />
              </Box>
              <Box
                sx={{
                  width: "140px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={logo} alt="" />
              </Box>
            </Stack>
            <Grid container spacing={5}>
              <Box
                sx={{
                  width: "1400px",
                  height: "700px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src={img}
                  alt=""
                />
              </Box>
            </Grid>
            <Box
              sx={{
                width: "1400px",
                height: "700px",
              }}
            >
              <Grid container spacing={5}>
                <Typography variant="h2" component="h2">
                  KIRTAN
                </Typography>
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum possimus neque, quibusdam, doloribus quasi
                  accusamus praesentium debitis doloremque facilis, voluptas
                  dolorum quaerat iure. Libero odit aspernatur laudantium maxime
                  tempora natus.
                </Typography>
                {CardItem.map((item) => {
                  return (
                    <Grid item key={item.id} sx={{}}>
                      <Card
                        sx={{
                          width: "300px",
                          height: "300px",
                          padding: "10px",

                          // position:"relative"
                        }}
                      >
                        <Grid size={12}>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "end",
                            }}
                            variant="h3"
                          >
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid size={12}>
                          <Typography variant="body1">
                            {item.description}
                          </Typography>
                        </Grid>
                        {/* <Typography variant="h3"
                      sx={{
                        position:"absolute",
                        right:"0",
                        top:"0",
                        }}>{item.title}</Typography>
                      <Typography variant="body2">{item.description}</Typography> */}
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default Home;
