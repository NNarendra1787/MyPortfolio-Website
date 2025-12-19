// import { createTheme } from "@mui/material";

// export const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//     background: {
//       default: "#f8fafc",
//       paper: "#ffffff",
//     },
//     primary: {
//       main: "#2563eb",
//     },
//     text: {
//       primary: "#0f172a",
//       secondary: "#475569",
//     },
//   },
//   typography: {
//     fontFamily: "Inter, Roboto, sans-serif",
//   },
// });

// export const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     background: {
//       default: "#0f172a",
//       paper: "rgba(255,255,255,0.05)",
//     },
//     primary: {
//       main: "#7c7cff",
//     },
//     text: {
//       primary: "#e5e7eb",
//       secondary: "#9ca3af",
//     },
//   },
//   typography: {
//     // fontFamily: "Inter, Roboto, sans-serif",
//     fontFamily: "Poppins, sans-serif"
//   },
// });

import { createTheme } from "@mui/material/styles";

/* ================= LIGHT THEME ================= */
export const lightTheme = createTheme({
  palette: {
    mode: "light",

    background: {
      default: "#f1f5f9",          // page background
      paper: "rgba(255,255,255,0.75)", // glass cards (LIGHT)
    },

    primary: {
      main: "#2563eb",
    },

    text: {
      primary: "#0f172a",   // headings (CLEAR)
      secondary: "#334155", // body text (READABLE)
    },

    divider: "rgba(15,23,42,0.12)",
  },

  typography: {
    fontFamily: "Poppins, sans-serif",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(14px)",
          backgroundColor: "rgba(255,255,255,0.8)",
          border: "1px solid rgba(15,23,42,0.08)",
          boxShadow: "0 12px 30px rgba(15,23,42,0.12)",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#0f172a",
        },
      },
    },
  },
});

/* ================= DARK THEME ================= */
export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#0f172a",
      paper: "rgba(255,255,255,0.06)",
    },

    primary: {
      main: "#7c7cff",
    },

    text: {
      primary: "#e5e7eb",
      secondary: "#9ca3af",
    },

    divider: "rgba(255,255,255,0.12)",
  },

  typography: {
    fontFamily: "Poppins, sans-serif",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(180deg, #0f172a 0%, #020617 100%)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(14px)",
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        },
      },
    },
  },
});

