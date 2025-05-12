import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";

function Footer() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ backgroundColor: "#fff", height: "auto", mt: 4, mb: 4 }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            padding: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mt: "50px",
          }}
        >
          <Grid
            container
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Grid item xs={4}>
              <img
                src="https://dummyimage.com/32x32/ffa000/ffffff&text=S"
                alt=""
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>
                {" "}
                <EmailIcon />
                bhimanikirtan7@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>
                <PhoneIcon />
                +91 9714022044
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>
                <RoomIcon /> surat
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Grid item xs={4}>
              <Typography variant="h5">Home</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Benefits</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Our Courses</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography> Our Testimonials</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Our FAQ</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Grid item xs={4}>
              <Typography variant="h5">About Us</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography> Company</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Achievements</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography> Our Goals</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Grid item xs={4}>
              <Typography variant="h5">Social Profiles</Typography>
            </Grid>
            <Grid container item xs={4}>
              <Avatar
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#f0f0f0",
                  color: "#000",
                }}
              >
                <InstagramIcon />
              </Avatar>
              <Grid item xs={4}>
                <Avatar
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                  }}
                >
                  <TwitterIcon />
                </Avatar>
              </Grid>
              <Grid item xs={4}>
                <Avatar
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                  }}
                >
                  <LinkedInIcon />
                </Avatar>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          item
          xs={12}
          sx={{
            display: "flex",
            p: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body1">
            © 2023 Skillbridge. All rights reserved.
          </Typography>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;
