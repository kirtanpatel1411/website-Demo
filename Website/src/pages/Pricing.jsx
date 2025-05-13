import React from "react";
import theme from "../theme/theme";
import Header from "./Header";
import Footer from "./Footer";
import { Typography, Button, Divider } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

function Pricing() {
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
              <Typography variant="h3" component="h2" fontWeight="bold"  color={theme.palette.fontcolor.dark}>
                Our Pricings
              </Typography>
            </Grid>

        
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.fontcolor.light, lineHeight: 1.8 }}
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
             color={theme.palette.fontcolor.main}
            sx={{ width: "100%", height: 1 }}
          />
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Grid
              xs={12}
              sm={6}
              md={4}
              lg={3}
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
              >
                Yearly
              </Button>
              <Button
              className="orange"
                variant="contained"
                sx={{
                  p: 1,
                  borderRadius: 3,
                }}
              >
                Monthly
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid
              container
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                backgroundColor:  theme.palette.background.main,
                pt: 8,
                pb: 8,
                borderRadius: 3,
              }}
            >
              <Grid
                xs={12}
                sm={6}
                md={4}
                lg={3}
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
                    <Typography variant="h5"  color={theme.palette.fontcolor.main}>Available Features</Typography>
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
                        <Grid  color={theme.palette.fontcolor.light}
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          sx={{
                            fontSize: "20px",
                            width: "100%",
                            backgroundColor:  theme.palette.background.main,
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
                    <Typography variant="h5"  color={theme.palette.fontcolor.main}>Available Features</Typography>
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
                        <Grid  color={theme.palette.fontcolor.light}
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
            <Grid
              container
              spacing={0}
              sx={{
                width: "100%",
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
                <Typography variant="h2"  color={theme.palette.fontcolor.dark}>Frequently Asked Questions</Typography>
                <Typography variant="h5"  color={theme.palette.fontcolor.light}>
                  Still you have any questions? Contact our Team via
                  support@skillbridge.com
                </Typography>
                <Button
                  sx={{
                    width: "30%",
                    padding: "15px",
                    border: ` 2px solid ${theme.palette.background.default}`,
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
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
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
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
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
                    Absolutely! You can enroll in multiple courses
                    simultaneously and access them at your convenience.
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
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
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
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
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
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Pricing;
