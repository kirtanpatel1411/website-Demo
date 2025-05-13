import React from "react";
import theme from "../theme/theme";
import { useNavigate } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Typography, Button, Paper } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import logo from "../assets/react.svg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import hero from "../assets/mainimg.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import Avatar from "@mui/material/Avatar";
import Profile from "../assets/myself.jpg";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

function Home() {
  const navigate = useNavigate();
  const PersonList = [
    {
      name: "Sarah L",
      about:
        "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    },
    {
      name: "Jason M",
      about:
        "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    },
    {
      name: "Emily R",
      about:
        "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    },
    {
      name: "David K",
      about:
        "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    },
  ];

  const CardItem = [
    {
      id: "1",
      title: "Flexible Learning Schedule",
      about:
        "Fit your coursework around your existing commitments and obligations",
    },
    {
      id: "2",
      title: "Expert Instruction",
      about:
        "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      id: "3",
      title: "Diverse Course Offerings",
      about:
        "Explore a wide range of design and development courses covering various topics.",
    },
    {
      id: "4",
      title: "Updated Curriculum",
      about:
        "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      id: "5",
      title: "Practical Projects and Assignments",
      about:
        "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      id: "6",
      title: "Interactive Learning Environment",
      about:
        "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];
  const CoursesList = [
    {
      img: img1,
      time: "4 Week",
      type: "Beginner",
      write: "By Jhon Smith",
      title: "Web Design Fundamentals",
      description:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    },
    {
      img: img2,
      time: "6 Week",
      type: "Intermediate",
      write: "By Emily Johnson",
      title: "UI/UX Design",
      description:
        "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    },
    {
      img: img3,
      time: "8 Week",
      type: "Intermediate",
      write: "By David Brown",
      title: "Mobile App Development",
      description:
        "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    },
    {
      img: img4,
      time: "10 Week",
      type: "Beginner",
      write: "By Sarah Thompson",
      title: "Graphic Design for Beginners",
      description:
        "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    },
    {
      img: img5,
      time: "10 Week",
      type: "Intermediate",
      write: "By Michael Adams",
      title: "Front-End Web Development",
      description:
        "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    },
    {
      img: img6,
      time: "6 Week",
      type: "Advance",
      write: "By Jennifer Wilson",
      title: "Advanced JavaScript",
      description:
        "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
    },
  ];

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
          xs={12}
          sm={6}
          md={4}
          lg={3}
          container
          spacing={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
          }}
        >
          <Box
            sx={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              px: 2,
              textAlign: "center",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 4,
                py: 2,
                px: 4,
                mb: 4,
                backgroundColor: theme.palette.background.main,
                color: theme.palette.fontcolor.dark,
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.light,
                  borderRadius: 2,
                  p: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                }}
              >
                <BoltIcon sx={{ color: theme.palette.fontcolor.dark }} />
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600 }}
                color={theme.palette.fontcolor.dark}
              >
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary.main }}
                >
                  Unlock
                </Box>{" "}
                Your Creative Potential
              </Typography>
            </Paper>

            <Typography
              variant="h4"
              sx={{
                color: theme.palette.fontcolor.main,
                fontWeight: 500,
                mb: 2,
              }}
            >
              with Online Design and Development Courses.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 5,
              }}
            >
              Learn from Industry Experts and Enhance Your Skills.
            </Typography>

            <Stack direction="row" spacing={3}>
              <Button
                className="orange"
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                }}
              >
                Explore Courses
              </Button>
              <Button
                className="white"
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
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
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: theme.palette.background.main,
            }}
          >
            {[
              "Zapier",
              "Spotify",
              "Zoom",
              "amazon",
              "Adobe",
              "Notion",
              "NETFLIX",
            ].map((i) => (
              <Box
                sx={{
                  width: "140px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    // fontSize: 20,
                    // color: theme.palette.fontcolor.dark,
                    fontWeight: 600,
                  }}
                >
                  {i}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Grid container spacing={5} xs={12}>
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
                  borderRadius: 5,
                }}
                src={hero}
                alt=""
              />
            </Box>
          </Grid>
          <Grid
            container
            spacing={3}
            sx={{
              width: "90%",
            }}
          >
            <Grid xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h2">Benefits</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Button className="orange" variant="contained">
                View More
              </Button>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {CardItem.map((item) => {
                return (
                  <Grid
                    container
                    key={item.id}
                    sx={{
                      width: "32%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Box
                        size={4}
                        sx={{
                          width: "100%",
                          height: "400px",
                          padding: "20px",
                          borderRadius: 3,
                          backgroundColor: theme.palette.background.main,
                          position: "relative",
                        }}
                      >
                        <Grid xs={12} sm={6} md={4} lg={3}>
                          <Typography
                            // color={theme.palette.fontcolor.dark}
                            sx={{
                              display: "flex",
                              justifyContent: "end",
                              // fontWeight: "bold",
                            }}
                            variant="h1"
                          >
                            {item.id}
                          </Typography>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={3}>
                          <Typography variant="h5">{item.title}</Typography>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={3}>
                          <Typography variant="body1">{item.about}</Typography>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={3}>
                          <Button
                            className="Gray"
                            variant="outlined"
                            sx={{
                              position: "absolute",
                              bottom: 20,
                              right: 20,
                              padding: 3,
                              borderRadius: 3,
                            }}
                          >
                            {" "}
                            <ArrowOutwardIcon />{" "}
                          </Button>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            sx={{
              width: "90%",
            }}
          >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h2">Our Courses</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3}>
              <Button
                className="orange"
                onClick={() => {
                  navigate("/Courses");
                  window.scrollTo(0, 0);
                }}
                variant="contained"
              >
                View All
              </Button>
            </Grid>
            <Grid
              container
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {CoursesList.map((item) => {
                return (
                  <Grid
                    container
                    key={item.id}
                    sx={{
                      width: "650px",
                      height: "650px",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Card
                        sx={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 2,
                          padding: "40px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <CardMedia
                          sx={{ height: 270 }}
                          image={item.img}
                          title="green iguana"
                        />
                        <Grid
                          container
                          spacing={2}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pt: 2,
                          }}
                        >
                          <Grid xs={12} sm={6} md={4} lg={3}>
                            <Chip
                              sx={{
                                borderRadius: 2,
                              }}
                              label={item.time}
                              variant="outlined"
                            />
                            <Chip
                              sx={{
                                borderRadius: 2,
                              }}
                              label={item.type}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Typography gutterBottom variant="h5">
                              {item.write}
                            </Typography>
                          </Grid>
                        </Grid>
                        <CardContent>
                          <Typography
                            variant="h5"
                            color={theme.palette.fontcolor.main}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: theme.palette.fontcolor.light }}
                          >
                            {item.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                            className="Gray"
                            variant="outlined"
                            sx={{
                              width: "100%",
                              p: 2,
                            }}
                          >
                            Get it Now
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={4}
            lg={3}
            container
            spacing={3}
            sx={{
              width: "90%",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h2"
                component="h2"
                color={theme.palette.fontcolor.main}
              >
                Our Testimonials
              </Typography>
              <Typography variant="h6" color={theme.palette.fontcolor.light}>
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3}>
              <Button className="orange" variant="contained">
                View More
              </Button>
            </Grid>
            <Grid
              container
              sx={{
                width: "100%",
              }}
            >
              {PersonList.map((item) => {
                return (
                  <Grid
                    container
                    key={item.id}
                    sx={{
                      width: "650px",
                      height: "250px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Card
                        sx={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 2,
                          padding: "20px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Grid
                            container
                            spacing={2}
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              // pt: 2,
                            }}
                          >
                            <Grid xs={12} sm={6} md={4} lg={3}>
                              <Typography
                                variant="h5"
                                color={theme.palette.fontcolor.light}
                              >
                                {item.about}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                        <Divider />
                        <Box>
                          <Grid
                            container
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Grid
                              container
                              spacing={2}
                              xs={12}
                              sm={6}
                              md={4}
                              lg={3}
                            >
                              <Grid xs={12} sm={6} md={4} lg={3}>
                                <Avatar
                                  alt="Remy Sharp"
                                  src={Profile}
                                  sx={{
                                    borderRadius: 1,
                                  }}
                                />
                              </Grid>
                              <Grid
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
                                <Typography
                                  variant="h5"
                                  color={theme.palette.fontcolor.dark}
                                >
                                  {item.name}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid xs={12} sm={6} md={4} lg={3}>
                              <Button
                                variant="outlined"
                                className="Gray"
                                sx={{
                                  width: "100%",
                                }}
                              >
                                Read All Story
                              </Button>
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            sx={{
              width: "90%",
            }}
          >
            <Grid xs={12} sm={6} md={4} lg={3}>
              <Typography
                variant="h2"
                component="h2"
                color={theme.palette.fontcolor.main}
              >
                Our Pricing
              </Typography>
              <Typography variant="h6" color={theme.palette.fontcolor.light}>
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </Typography>
            </Grid>
            <Grid
              spacing={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: theme.palette.background.main,
                p: 2,
                borderRadius: 5,
              }}
            >
              <Button
                className="Gray"
                variant="outlined"
                sx={{
                  borderRadius: 3,
                }}
              >
                Yearly
              </Button>
              <Button
                className="orange"
                variant="contained"
                sx={{
                  borderRadius: 3,
                }}
              >
                Monthly
              </Button>
            </Grid>
            <Grid
              container
              sx={{
                width: "100%",
                justifyContent: "center",
                backgroundColor: theme.palette.background.main,
                pt: 8,
                pb: 8,
                borderRadius: 3,
              }}
            >
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Card
                  sx={{
                    width: "570px",
                    height: "auto",
                    borderRadius: 2,
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",

                    gap: "30px",
                  }}
                >
                  <Grid
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      padding: "20px",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    Free Plan
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{
                      padding: "20px",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      fontSize: "50px",
                      fontWeight: "bold",
                    }}
                  >
                    $0<span style={{ fontSize: "20px" }}>/month</span>
                  </Grid>

                  <Grid
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    container
                    spacing={2}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      color={theme.palette.fontcolor.main}
                    >
                      Available Features
                    </Typography>
                    {[
                      "Access to selected free courses",
                      "Limited course materials and resources",
                      "Basic community support",
                      "No certification upon completion",
                      "Ad-supported platform",
                      "Access to exclusive Pro Plan community forums",
                      "Early access to new courses and updates",
                    ].map((item, index) => (
                      <Stack direction="column" spacing={8} key={index}>
                        <Grid
                          color={theme.palette.fontcolor.light}
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          sx={{
                            fontSize: "20px",
                            width: "100%",
                            backgroundColor: theme.palette.background.main,
                            padding: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            border: `1px solid ${theme.palette.background.default}`,
                            borderRadius: 2,
                          }}
                        >
                          <Checkbox disabled checked />
                          {item}
                        </Grid>
                      </Stack>
                    ))}
                  </Grid>
                  <Grid xs={12} sm={6} md={4} lg={3}>
                    <Button
                      className="orange"
                      variant="contained"
                      sx={{
                        width: "100%",
                        height: "50px",
                      }}
                    >
                      Get Started
                    </Button>
                  </Grid>
                </Card>
                <Card
                  sx={{
                    width: "570px",
                    height: "auto",
                    borderRadius: 2,
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",

                    gap: "30px",
                  }}
                >
                  <Grid
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      padding: "20px",
                      display: "flex",

                      justifyContent: "center",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    Pro Plan
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{
                      padding: "20px",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      fontSize: "50px",
                      fontWeight: "bold",
                    }}
                  >
                    $79<span style={{ fontSize: "20px" }}>/month</span>
                  </Grid>

                  <Grid
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    container
                    spacing={2}
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      color={theme.palette.fontcolor.main}
                    >
                      Available Features
                    </Typography>
                    {[
                      "Unlimited access to all courses",
                      "Unlimited course materials and resources",
                      "Priority support from instructors",
                      "Course completion certificates",
                      "Ad-free experience",
                      "Access to exclusive Pro Plan community forums",
                      "Early access to new courses and updates",
                    ].map((item, index) => (
                      <Stack direction="column" spacing={8} key={index}>
                        <Grid
                          color={theme.palette.fontcolor.light}
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          sx={{
                            fontSize: "20px",
                            width: "100%",
                            backgroundColor: theme.palette.background.main,
                            padding: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            border: `1px solid ${theme.palette.background.default}`,
                            borderRadius: 2,
                          }}
                        >
                          <Checkbox disabled checked />
                          {item}
                        </Grid>
                      </Stack>
                    ))}
                  </Grid>
                  <Grid xs={12} sm={6} md={4} lg={3}>
                    <Button
                      className="orange"
                      variant="contained"
                      sx={{
                        width: "100%",
                        height: "50px",
                      }}
                    >
                      Get Started
                    </Button>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            sx={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: theme.palette.background.main,
              borderRadius: 3,
              mb: 5,
            }}
          >
            <Grid
              xs={6}
              sx={{
                width: "50%",
                padding: "50px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography variant="h2" color={theme.palette.fontcolor.dark}>
                Frequently Asked Questions
              </Typography>
              <Typography variant="h5" color={theme.palette.fontcolor.light}>
                Still you have any questions? Contact our Team via
                support@skillbridge.com
              </Typography>
              <Button
                className="Gray"
                sx={{
                  width: "30%",
                  padding: "15px",
                  border: `2px solid ${theme.palette.background.default}`,
                  color: "#000",
                }}
                variant="outlined"
              >
                {" "}
                See All FAQ’s
              </Button>
            </Grid>
            <Card
              sx={{
                width: "40%",
                height: "auto",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                m: 5,
              }}
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">
                    Can I enroll in multiple courses at once?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span">
                    Enrollment Process for Different Courses
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography component="span">
                    What kind of support can I expect from instructors?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Absolutely! You can enroll in multiple courses simultaneously
                  and access them at your convenience.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span">
                    Are the courses self-paced or do they have specific start
                    and end dates?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span">
                    Are there any prerequisites for the courses?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span">
                    Can I download the course materials for offline access?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
export default Home;
