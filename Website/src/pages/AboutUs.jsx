import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Typography, Button, Divider, Avatar } from "@mui/material";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

function AboutUs() {
  const Achievements = [
    {
      image: icon1,
      title: "Trusted by Thousands",
      description:
        "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
    },
    {
      image: icon2,
      title: "Award-Winning Courses",
      description:
        "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
    },
    {
      image: icon3,
      title: "Positive Student Feedback",
      description:
        "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
    },
    {
      image: icon4,
      title: "Industry Partnerships",
      description:
        " We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies.",
    },
  ];
  const Goals = [
    {
      image: icon5,
      title: "Provide Practical Skills",
      description:
        "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
    },
    {
      image: icon6,
      title: "Foster Creative Problem-Solving",
      description:
        "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.  ",
    },
    {
      image: icon7,
      title: "Promote Collaboration and Community",
      description:
        "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
    },
    {
      image: icon8,
      title: "Stay Ahead of the Curve",
      description:
        "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
    },
  ];
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
            spacing={4}
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
                About Skillbridge
              </Typography>
            </Grid>

      
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8 }}
              >
                Welcome to our platform, where we are passionate about
                empowering individuals to master the world of design and
                development. We offer a wide range of online courses designed to
                equip learners with the skills and knowledge needed to succeed
                in the ever-evolving digital landscape.
              </Typography>
            </Grid>
          </Grid>

          <Divider
            color="#000"
            sx={{ width: "100%", height: 1 }}
          />
          <Grid container spacing={3}>
            <Grid
              xs={12}
              sm={6}
              md={4}
              lg={3}
              container
              spacing={3}
              sx={{
                width: "100%",
              }}
            >
              <Grid xs={12} sm={6} md={4} lg={3}>
                <Typography variant="h4">Achievements</Typography>
                <Typography variant="body1">
                  Our commitment to excellence has led us to achieve significant
                  milestones along our journey. Here are some of our notable
                  milestones along our journey. Here are some of our notable
                  milestones along our journey. Here are some of our notable
                  milestones along our journey. Here are some of our notable
                  achievements
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {Achievements.map((item) => (
                <Grid key={item.id} xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      width: "600px",
                      height: "260px",
                      display: "flex",
                      padding: 5,
                      borderRadius: 4,
                    }}
                  >
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 3,
                      }}
                    >
                      <Grid item xs={12}>
                        <Avatar
                          src={item.image}
                          sx={{
                            borderRadius: 1,
                            border: " 1px solid #ff9500",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h4">{item.title}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">
                          {item.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid
              xs={12}
              sm={6}
              md={4}
              lg={3}
              container
              spacing={3}
              sx={{
                width: "100%",
              }}
            >
              <Grid xs={12} sm={6} md={4} lg={3}>
                <Typography variant="h4">Our Goals</Typography>
                <Typography variant="body1">
                  At SkillBridge, our goal is to empower individuals from all
                  backgrounds to thrive in the world of design and development.
                  We believe that education should be accessible and
                  transformative, enabling learners to pursue their passions and
                  make a meaningful impact. Through our carefully crafted
                  courses, we aim to
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {Goals.map((item) => (
                <Grid key={item.id} xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      width: "600px",
                      height: "260px",
                      display: "flex",
                      padding: 5,
                      borderRadius: 4,
                    }}
                  >
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 3,
                      }}
                    >
                      <Grid item xs={12}>
                        <Avatar
                          src={item.image}
                          sx={{
                            borderRadius: 1,
                            border: " 1px solid #ff9500",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h4">{item.title}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">
                          {item.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: { xs: 4, md: 6 },
              borderRadius: 3,
              overflow: "hidden",
              width: "100%",
              height: "100px",
            }}
          >
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={12} md={8} zIndex={1}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  <span style={{ color: "#ff9500" }}>Together</span>, let’s
                  shape the future of digital innovation
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Join us on this exciting learning journey and unlock your
                  potential in design and development.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                container
                justifyContent={{ xs: "flex-start", md: "flex-end" }}
                alignItems="center"
                zIndex={1}
                mt={{ xs: 2, md: 0 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff9500",
                    color: "#fff",
                    borderRadius: 2,
                    paddingX: 3,
                    paddingY: 1,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#e07d00",
                    },
                  }}
                >
                  Join Now
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default AboutUs;
