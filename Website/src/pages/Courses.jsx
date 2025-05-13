import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { Typography, Button, Divider } from "@mui/material";
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router";
import { fetchCourses } from "../redux/CoursesSlice";
import Grid from "@mui/material/Grid";
import { selectCourse } from "../redux/CoursesSlice";
import Container from "@mui/material/Container";
import theme from "../theme/theme";

function Courses() {
  const dispatch = useDispatch();
  const { Courses, loading, error } = useSelector((state) => state.Courses);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const courseClick = (course) => {
    dispatch(selectCourse(course));
    navigate(`/CoursesShow/${course.id}`);
    window.scrollTo(0, 0);
  };

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
              display: "flex",
              flexDirection: "column",

              justifyContent: "space-between",
              px: 2,
              py: 2,
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h3">
                Online Courses on <br /> Design and Development
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.8 }}
              >
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac eget elit id imperdiet et. Cras eu sit dignissim lorem nibh
                et. Ac cum eget habitasse in velit fringilla feugiat senectus
                in.
              </Typography>
            </Grid>
          </Grid>

          <Divider color={theme.palette.fontcolor.main} sx={{ width: "100%", height: 1 }} />
          {loading
            ? "Loading..."
            : error
            ? error
            : Courses.map((course, index) => (
                <Grid
                  key={course.id}
                  container
                  spacing={3}
                  sx={{
                    backgroundColor:  theme.palette.background.main,
                    width: "100%",
                    height: "auto",
                    borderRadius: 3,
                    p: 6,
                  }}
                >
                  <Grid
                    container
                    item
                    xs={12}
                    md={6}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Grid container item xs={12} sx={{ width: "80%" }}>
                      <Grid item xs={12} sx={{}}>
                        <Typography variant="h4" >{course.coursname}</Typography>

                        <Typography variant="body1">
                          {course.description}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container xs={12}>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                        className="orange"
                          variant="contained"
                          onClick={() => courseClick(course)}
                          sx={{
                            color: "#fff",
                            backgroundColor: theme.palette.primary.main,
                            border: "none",
                          }}
                        >
                          View Course
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,

                        width: "100%",
                      }}
                    >
                      <Grid item xs={12}>
                        <img
                          src={course.img1}
                          alt=""
                          style={{
                            width: "420px",
                            height: "350px",
                            borderRadius: "10px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <img
                          src={course.img2}
                          alt=""
                          style={{
                            width: "420px",
                            height: "350px",
                            borderRadius: "10px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <img
                          src={course.img3}
                          alt=""
                          style={{
                            width: "420px",
                            height: "350px",
                            borderRadius: "10px",
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Grid container item xs={12}>
                        <Grid item xs={12}>
                          <Chip
                            sx={{
                              
                              borderRadius: 2,
                              p: 2,
                            }}
                            label={course.week}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Chip
                            sx={{
                              borderRadius: 2,
                              p: 2,
                            }}
                            label={course.level}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                      <Grid container item xs={12}>
                        <Grid item xs={12}>
                          <Typography variant="h5" >{course.name}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Grid item xs={12}>
                        <Typography variant="h6" color={theme.palette.fontcolor.main}>Curriculum</Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      {course.number.map((topic) => (
                        <React.Fragment key={topic.id}>
                          <Grid
                            container
                            item
                            xs={12}
                            sx={{
                              width: "15%",
                              display: "flex",
                              justifyContent: "space-between",
                              flexDirection: "column",
                              p: 2,
                            }}
                          >
                            <Grid item xs={12}>
                              <Typography variant="h3" >{topic.id}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="body1" >
                                {topic.text}
                              </Typography>
                            </Grid>
                          </Grid>

                          <Divider orientation="vertical" flexItem />
                        </React.Fragment>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Courses;
