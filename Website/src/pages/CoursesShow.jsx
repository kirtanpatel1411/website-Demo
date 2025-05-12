import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Typography, Button, Divider, Box, Card, Chip } from "@mui/material";
import img from "../assets/img13.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";

function CoursesShow() {
    const Course = useSelector((state) => state.Courses.selectCourse);
  return (
    <>
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#f0f0f0",
        }}
      >
        {Course ?(
        
        <Grid
         key={id}
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
              display: "flex",
              flexDirection: "column",

              justifyContent: "space-between",
              px: 2,
              py: 2,
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" fontWeight="bold">
                {Course.coursname}
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8 }}
              >
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac eget elit id imperdiet et. Cras eu sit dignissim lorem nibh
                et. Ac cum eget habitasse in velit fringilla feugiat senectus
                in.
              </Typography>
            </Grid>
          </Grid>

          <Divider color="#000" sx={{ width: "100%", height: 1 }} />

          <Grid
            container
            spacing={4}
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
                width: "90%",
                height: "700px",
              }}
            >
              <img
                src={img}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
    {/**BOX 1 */}
            <Box
              sx={{
                width: "600px",
                height: "auto",
                backgroundColor: "#fff",
                p: 4,
              }}
            >
              <Grid
                container
                spacing={3}
                sx={{
                  mb: 4,
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography variant="h1">01</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">web devlopment</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "10px",
                    p: 2,
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6">
                        Understanding UI/UX Design Principles
                      </Typography>
                      <Typography variant="body1">Lesson 01</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          backgroundColor: "#F0F0F0",
                          color: "#333",
                        }}
                      >
                        <AccessTimeIcon />1 hour
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "10px",
                    p: 2,
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6">
                        Understanding UI/UX Design Principles
                      </Typography>
                      <Typography variant="body1">Lesson 01</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          backgroundColor: "#F0F0F0",
                          color: "#333",
                        }}
                      >
                        <AccessTimeIcon />1 hour
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "10px",
                    p: 2,
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6">
                        Understanding UI/UX Design Principles
                      </Typography>
                      <Typography variant="body1">Lesson 01</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          backgroundColor: "#F0F0F0",
                          color: "#333",
                        }}
                      >
                        <AccessTimeIcon />1 hour
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Box>
            {/**BOX2 */}
            {/* <Box
              sx={{
                width: "600px",
                height: "auto",
                backgroundColor: "#fff",
                p: 4,
              }}
            >
              <Grid
                container
                spacing={3}
                sx={{
                  mb: 4,
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography variant="h1">01</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">web devlopment</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "10px",
                    p: 2,
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6">
                        Understanding UI/UX Design Principles
                      </Typography>
                      <Typography variant="body1">Lesson 01</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          backgroundColor: "#F0F0F0",
                          color: "#333",
                        }}
                      >
                        <AccessTimeIcon />1 hour
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "10px",
                    p: 2,
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6">
                        Understanding UI/UX Design Principles
                      </Typography>
                      <Typography variant="body1">Lesson 01</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          backgroundColor: "#F0F0F0",
                          color: "#333",
                        }}
                      >
                        <AccessTimeIcon />1 hour
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "10px",
                    p: 2,
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6">
                        Understanding UI/UX Design Principles
                      </Typography>
                      <Typography variant="body1">Lesson 01</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          backgroundColor: "#F0F0F0",
                          color: "#333",
                        }}
                      >
                        <AccessTimeIcon />1 hour
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Box> */}

            {/**BOX3 */}
            {/* <Box
              sx={{
                width: "600px",
                height: "auto",
                backgroundColor: "#fff",
                p: 4,
              }}
            >
              <Grid
                container
                spacing={3}
                sx={{
                  mb: 4,
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography variant="h1">01</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">web devlopment</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "10px",
                    p: 2,
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6">
                        Understanding UI/UX Design Principles
                      </Typography>
                      <Typography variant="body1">Lesson 01</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          backgroundColor: "#F0F0F0",
                          color: "#333",
                        }}
                      >
                        <AccessTimeIcon />1 hour
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "10px",
                    p: 2,
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6">
                        Understanding UI/UX Design Principles
                      </Typography>
                      <Typography variant="body1">Lesson 01</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          backgroundColor: "#F0F0F0",
                          color: "#333",
                        }}
                      >
                        <AccessTimeIcon />1 hour
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "10px",
                    p: 2,
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6">
                        Understanding UI/UX Design Principles
                      </Typography>
                      <Typography variant="body1">Lesson 01</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          backgroundColor: "#F0F0F0",
                          color: "#333",
                        }}
                      >
                        <AccessTimeIcon />1 hour
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Box> */}
            {/*BOX4*/}
            {/* <Box
              sx={{
                width: "600px",
                height: "auto",
                backgroundColor: "#fff",
                p: 4,
              }}
            >
              <Grid
                container
                spacing={3}
                sx={{
                  mb: 4,
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography variant="h1">01</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">web devlopment</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "10px",
                    p: 2,
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6">
                        Understanding UI/UX Design Principles
                      </Typography>
                      <Typography variant="body1">Lesson 01</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          backgroundColor: "#F0F0F0",
                          color: "#333",
                        }}
                      >
                        <AccessTimeIcon />1 hour
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "10px",
                    p: 2,
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6">
                        Understanding UI/UX Design Principles
                      </Typography>
                      <Typography variant="body1">Lesson 01</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          backgroundColor: "#F0F0F0",
                          color: "#333",
                        }}
                      >
                        <AccessTimeIcon />1 hour
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "10px",
                    p: 2,
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6">
                        Understanding UI/UX Design Principles
                      </Typography>
                      <Typography variant="body1">Lesson 01</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          backgroundColor: "#F0F0F0",
                          color: "#333",
                        }}
                      >
                        <AccessTimeIcon />1 hour
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Box> */}
          </Grid>
        </Grid>
  ):(

    <div> Loading...</div>
)}
</Container>


    </>
  );
}

export default CoursesShow;
