// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import IconButton from "@mui/material/IconButton";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";

// const links = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Skills", path: "/skills" },
//   { label: "Projects", path: "/projects" },
//   { label: "Contact", path: "/contacts" },
// ];

// function Navbar({mode, toggleTheme }) {
//   return (
//     <AppBar position="sticky" elevation={1}>
//       <Toolbar sx={{ maxWidth: "1200px", width: "100%", mx: "auto" }}>
//         <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
//           Narendra Narwade
//         </Typography>

//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           {links.map((link) => (
//             <Button
//               key={link.path}
//               component={NavLink}
//               to={link.path}
//               sx={{
//                 color: "inherit",
//                 mx: 1,
//                 "&.active": {
//                   color: "primary.main",
//                   fontWeight: "bold",
//                 },
//               }}
//             >
//               {link.label}
//             </Button>
//           ))}

//           {/* THEME TOGGLER */}
//           <IconButton
//             onClick={toggleTheme}
//             color="inherit"
//             sx={{ ml: 1 }}
//           >
//             {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   )
// }

// export default Navbar


import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Container,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contacts" },
];

const Navbar = ({ mode, toggleTheme }) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(30,41,59,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          {/* Logo / Name */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, flexGrow: 1 }}
          >
            Narendra Narwade
          </Typography>

          {/* Links */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {links.map((link) => (
              <Button
                key={link.path}
                component={NavLink}
                to={link.path}
                sx={{
                  mx: 1,
                  color: "text.primary",
                  fontWeight: 500,
                  "&.active": {
                    color: "primary.main",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}

            {/* Theme Toggle */}
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{ ml: 1 }}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
