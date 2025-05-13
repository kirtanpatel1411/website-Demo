// import React from "react";
import theme from "../theme/theme";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  Stack,
  Container,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router";
import logo from "../assets/Logo.png";

export default function Header() {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          textAlign: "center",
          borderRadius: "5px",
          p: 1,
          fontWeight: "500",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" sx={{ mr: 1 }}>
          Free Courses 🌟 Sale Ends Soon, Get It Now
        </Typography>
        <ArrowForwardIcon fontSize="small" />
      </Box>

      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.background.default,
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{ width: 40, height: 40, borderRadius: 1 }}
            />

            {[
              { label: "Home", path: "/" },
              { label: "Courses", path: "/courses" },
              { label: "About Us", path: "/aboutUs" },
              { label: "Pricing", path: "/pricing" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <Button
                className="active ? 'active' : ''"
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                sx={{
                  color:
                    location.pathname === item.path
                      ? theme.palette.fontcolor.dark
                      : theme.palette.fontcolor.main,
                  textTransform: "none",
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                  borderBottom:
                    location.pathname === item.path
                      ? `2px solid ${theme.palette.primary.main}`
                      : "none",
                  borderRadius: 0,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              className="white"
              variant="outlined"
              onClick={() => {
                navigate("/SignUp");
              }}
            >
              Sign Up
            </Button>
            <Button
              className="orange"
              variant="contained"
              onClick={() => {
                navigate("/Login");
              }}
            >
              Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
