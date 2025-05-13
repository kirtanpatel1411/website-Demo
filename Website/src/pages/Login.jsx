import React from "react";
import theme from "../theme/theme";
import Header from "./Header";
import Container from "@mui/material/Container";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TextField from "@mui/material/TextField";
import img from "../assets/myself.jpg";
import { useState } from "react";
import {
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Box,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";

import { Avatar, Button } from "@mui/material";
import Footer from "./Footer";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            padding: 2,
            width: "100%",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              padding: 5,
              display: "flex",
              justifyContent: "center",
              gap: 10,
              width: "100%",
              display: "flex",
            }}
          >
            <Grid
              container
              item
              xs={12}
              sx={{
                width: "50%",
                display: "flex",
                alignItems: "end",
              }}
            >
              <Grid item xs={12}>
                <Typography variant="h4"  color={theme.palette.fontcolor.main}>Students Testimonials</Typography>
                <Typography variant="body1"  color={theme.palette.fontcolor.light}>
                  Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                  eget elit id imperdiet et. Cras eu sit dignissim lorem nibh
                  et. Ac cum eget habitasse in velit fringilla feugiat senectus
                  in.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "auto",
                    backgroundColor:  theme.palette.background.main,
                    borderRadius: 2,
                  }}
                >
                  <Grid
                    container
                    spacing={5}
                    sx={{
                      width: "100%",
                      height: "auto",
                      p: 3,
                    }}
                  >
                    <Grid item xs={12}>
                      <Typography variant="body1"  color={theme.palette.fontcolor.light}>
                        The web design course provided a solid foundation for
                        me. The instructors were knowledgeable and supportive,
                        and the interactive learning environment was engaging. I
                        highly recommend it!
                      </Typography>
                    </Grid>
                    <Divider
                      sx={{
                        width: "100%",
                      }}
                    />
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Grid
                        item
                        xs={6}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <Avatar
                          sx={{
                            borderRadius: 2,
                          }}
                        >
                        <img src={img} alt="" 
                        style={{
                            width: 40,
                        }}
                        />
                        </Avatar>
                        <Typography variant="h5"  color={theme.palette.fontcolor.dark}>kirtan</Typography>
                      </Grid>
                      <Button
                      className="Gray"
                        variant="outlined"
                      >
                        Read More
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: 2,

                  justifyContent: "flex-end",
                }}
              >
                <Button
                className="white"
                  sx={{
                    p: 2,
                  }}
                  variant="outlined"
                >
                  <ArrowBackIosNewIcon />
                </Button>
                <Button
                className="white"
                  sx={{
                    p: 2,
                  }}
                  variant="outlined"
                >
                  <ArrowForwardIosIcon />
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sx={{
                width: "35%",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  width: "100%",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor:  theme.palette.background.main,
                    p: 4,
                    borderRadius: 3,
                  }}
                >
                  <Grid
                    container
                    item
                    xs={12}
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h4" fontWeight="bold" gutterBottom  color={theme.palette.fontcolor.dark}>
                      Login
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color:theme.palette.fontcolor.light }}>
                      Welcome back! Please log in to access your account.
                    </Typography>
                  </Grid>

                  <TextField
                    label="Email"
                    placeholder="Enter your Email"
                    fullWidth
                    margin="normal"
                  />

                  <TextField
                    label="Password"
                    placeholder="Enter your Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ my: 1 }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Remember Me"
                    />
                    <Link href="#" underline="hover" sx={{ color: theme.palette.fontcolor.light}}>
                      Forgot Password?
                    </Link>
                  </Grid>

                  <Button
                  variant="contained"
                  className="orange"
                    fullWidth
                    sx={{
                      py: 1.5,
                      borderRadius: 2,
                      mb: 2,
                    }}
                  >
                    Login
                  </Button>

                  <Divider sx={{ my: 2 }}>OR</Divider>

                  <Button
                    fullWidth
                    className="Gray"
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    sx={{
                      textTransform: "none",
                      py: 1.5,
                      borderRadius: 2,
                      mb: 2,
                    }}
                  >
                    Login with Google
                  </Button>

                  <Typography textAlign="center"  color={theme.palette.fontcolor.light}>
                    Don’t have an account?{" "}
                    <Link
                      href="#"
                      underline="hover"
                      fontWeight="bold"
                      sx={{ color:theme.palette.primary.main }}
                    >
                      Sign Up
                    </Link>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
