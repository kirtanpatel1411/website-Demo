// import React from "react";
import theme from "../theme/theme";
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
import logo from "../assets/Logo.png";

function Footer() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: theme.palette.background.main,
          height: "auto",
          mt: 4,
          mb: 4,
        }}
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
              <img src={logo} alt="" />
            </Grid>
            <Grid item xs={4}>
              <Typography  variant="body1"color={theme.palette.fontcolor.main}>
                {" "}
                <EmailIcon />
                bhimanikirtan7@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" color={theme.palette.fontcolor.main}>
                <PhoneIcon />
                +91 9714022044
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography  variant="body1" color={theme.palette.fontcolor.main}>
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
              <Typography variant="h5" color={theme.palette.fontcolor.dark}>
                Home
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" color={theme.palette.fontcolor.main}>
                Benefits
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" color={theme.palette.fontcolor.main}>
                Our Courses
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" color={theme.palette.fontcolor.main}>
                {" "}
                Our Testimonials
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography  variant="body1"color={theme.palette.fontcolor.main}>
                {" "}
                Our FAQ
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
              <Typography variant="h5"  color={theme.palette.fontcolor.dark}>About Us</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography  variant="body1" color={theme.palette.fontcolor.main}> Company</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography   variant="body1" color={theme.palette.fontcolor.main}>Achievements</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography  variant="body1" color={theme.palette.fontcolor.main}> Our Goals</Typography>
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
              <Typography variant="h5"  color={theme.palette.fontcolor.dark}>Social Profiles</Typography>
            </Grid>
            <Grid container item xs={4}>
              <Avatar
                sx={{
                  borderRadius: 2,
                  backgroundColor: theme.palette.background.default,
                  color: "#000",
                }}
              >
                <InstagramIcon />
              </Avatar>
              <Grid item xs={4}>
                <Avatar
                  sx={{
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.default,
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
                    backgroundColor: theme.palette.background.default,
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
          <Typography variant="body1"  color={theme.palette.fontcolor.light}>
            © 2023 Skillbridge. All rights reserved.
          </Typography>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;
