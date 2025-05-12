import React from "react";
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

export default function Header() {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box>

      <Box
        sx={{
          backgroundColor: "#FF9500",
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
        <Typography variant="body1" sx={{ mr: 1 }}>
          Free Courses 🌟 Sale Ends Soon, Get It Now
        </Typography>
        <ArrowForwardIcon fontSize="small" />
      </Box>

     
      <AppBar
        position="static"
        sx={{ backgroundColor: "#f0f0f0", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
         
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              component="img"
              src="https://dummyimage.com/32x32/ffa000/ffffff&text=S" 
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
                  color: location.pathname === item.path ? "#000" : "#555",
                  textTransform: "none",
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                  borderBottom:
                    location.pathname === item.path
                      ? "2px solid #ff9500"
                      : "none",
                  borderRadius: 0,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

   
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button sx={{ color: "#555" }}>Sign Up</Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFA000",
                color: "white",
                textTransform: "none",
                borderRadius: "8px",
                px: 3,
                py: 1,
                fontWeight: 500,
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
