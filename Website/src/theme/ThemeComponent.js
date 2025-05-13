export const MuiButton = {
  styleOverrides: {
    root: {
      padding: "10px 20px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  },
  variants: [
    {
      props: { variant: "contained" },
      style: ({ theme, ownerState }) => ({
        "&.orange": {
          backgroundColor: "#ff9500",
          color: "#fff",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: `#fff`,
            color: "#ff9500",
          },
        },
        "&.white": {
          backgroundColor: "#f0f0f0",
          color: "#000",
          fontWeight: 500,
          border: "none",
        },
        "&:hover": {
          backgroundColor: `#FFF1DC`,
        },
      }),
    },

    {
      props: { variant: "outlined" },
      style: ({ theme, ownerState }) => ({
        "&.white": {
          backgroundColor: "#fff",
          color: "#000",
          fontWeight: 500,
          border: "none",
          "&:hover": {
            backgroundColor: `#FFF1DC`,
          },
        },
        "&.Gray": {
          backgroundColor: "#f0f0f0",
          color: "#000",
          fontWeight: 500,
          border: "none",
          "&:hover": {
            backgroundColor: `#FFF1DC`,
          },
        },
      }),
    },
  ],
};

export const MuiTypography = {
  styleOverrides: {
    root: {
      fontFamily: "Poppins, Roboto, sans-serif",
    },
  },
  variants: [
    {
      props: { variant: "h1" },
      style: {
        fontSize: "70px",
        fontWeight: 700,
        color: "#191919",
      },
    },
    // {
    //   props: { variant: "h2" },
    //   style: {
    //     fontSize: "2.5rem",
    //     fontWeight: 600,
    //     color: "#333",
    //   },
    // },
    {
      props: { variant: "h3" },
      style: {
        fontSize: "50px",
        fontWeight: 600,
        color: "#191919",
      },
    },
    {
      props: { variant: "h4" },
      style: {
        fontSize: "40px",
        fontWeight: 400,
        color: "#262626",
      },
    },
    {
      props: { variant: "h5" },
      style: {
        fontSize: "25px",
        fontWeight: 500,
        color: "#191919",
      },
    },
    {
      props: { variant: "body1" },
      style: {
        fontSize: "18px",
        color: "#59595A",
      },
    },
    {
      props: { variant: "caption" },
      style: {
        fontSize: "0.8rem",
        color: "#999",
      },
    },
  ],
};
