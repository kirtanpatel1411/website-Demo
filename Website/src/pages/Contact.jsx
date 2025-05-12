import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Typography,
  Button,
  Divider,
  Box,
  TextField,
  Avatar,
} from "@mui/material";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function Contact() {
  return (
    <>
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <Grid
          xs={12}
          sm={6}
          md={4}
          lg={3}
          container
          spacing={5}
          sx={{
            width: "100%",
            p: 4,
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2, 
              py: 2, 
            }}
          >
           <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" fontWeight="bold">
                Contact Us
              </Typography>
            </Grid>

           
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8 }}
              >
                Welcome to SkillBridge's Pricing Plan page, where we offer two
                comprehensive options to cater to your needs: Free and Pro. We
                believe in providing flexible and affordable pricing options for
                our services. Whether you're an individual looking to enhance
                your skills or a business seeking professional development
                solutions, we have a plan that suits you. Explore our pricing
                options below and choose the one that best fits your
                requirements.
              </Typography>
            </Grid>
          </Grid>

          <Divider
            color="#000"
            sx={{ width: "100%", height: 1 }}
          />
          <Grid
            container
            spacing={3}
            sx={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                borderRadius: 3,
                width: "100%",
                backgroundColor: "#fff",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  gap: 4,
                  width: "70%",
                  height: "auto",
                  padding: 5,
                }}
              >
                <Grid
                  container
                  item
                  xs={12}
                  spacing={4}
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    item
                    xs={6}
                    md={6}
                    sx={{
                      width: "40%",
                    }}
                  >
                    <Typography variant="body1" mb={1}>
                      First Name
                    </Typography>
                    <TextField
                      placeholder="Enter First Name"
                      fullWidth
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    md={6}
                    sx={{
                      width: "40%",
                    }}
                  >
                    <Typography variant="body1" mb={1}>
                      Last Name
                    </Typography>
                    <TextField
                      placeholder="Enter Last Name"
                      fullWidth
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  spacing={4}
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
               
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: "40%",
                    }}
                  >
                    <Typography variant="body1" mb={1}>
                      Email
                    </Typography>
                    <TextField
                      placeholder="Enter your Email"
                      fullWidth
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: "40%",
                    }}
                  >
                    <Typography variant="body1" mb={1}>
                      Phone
                    </Typography>
                    <TextField
                      placeholder="Enter Phone Number"
                      fullWidth
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
          
                  <Grid
                    item
                    xs={12}
                    sx={{
                      width: "84%",
                    }}
                  >
                    <Typography variant="body1" mb={1}>
                      Subject
                    </Typography>
                    <TextField
                      placeholder="Enter your Subject"
                      fullWidth
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
            
                  <Grid
                    item
                    xs={12}
                    sx={{
                      width: "84%",
                    }}
                  >
                    <Typography variant="body1" mb={1}>
                      Message
                    </Typography>
                    <TextField
                      placeholder="Enter your Message here..."
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
           
                  <Grid item xs={12} textAlign="center">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#ff9500",
                        color: "#fff",
                        borderRadius: 2,
                        paddingX: 4,
                        paddingY: 1.2,
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#e07d00",
                        },
                      }}
                    >
                      Send Your Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  width: "30%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                }}
              >
                <Box
                  sx={{
                    width: "80%",
                    height: "20%",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MailIcon />
                  <Typography>support@skillbridge.com</Typography>
                </Box>
                <Box
                  sx={{
                    width: "80%",
                    height: "20%",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PhoneIcon />
                  <Typography>9714022044</Typography>
                </Box>
                <Box
                  sx={{
                    width: "80%",
                    height: "20%",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PlaceIcon />
                  <Typography>Some Where in the World</Typography>
                </Box>
                <Box
                  sx={{
                    width: "80%",
                    height: "20%",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid container spacing={2}>
                    <FacebookIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                  </Grid>
                  <Typography>Social Profiles</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
