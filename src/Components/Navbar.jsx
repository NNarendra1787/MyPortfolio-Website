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

//

// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Container,
// } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import { motion } from "framer-motion";

// const links = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Skills", path: "/skills" },
//   { label: "Projects", path: "/projects" },
//   { label: "Contact", path: "/contacts" },
// ];

// const Navbar = ({ mode, toggleTheme }) => {
//   return (
//     <AppBar
//       position="fixed"
//       elevation={0}
//       sx={{
//         backgroundColor:
//           mode === "dark"
//             ? "rgba(15,23,42,0.85)"
//             : "rgba(255,255,255,0.85)",
//         backdropFilter: "blur(12px)",
//         borderBottom:
//           mode === "dark"
//             ? "1px solid rgba(255,255,255,0.08)"
//             : "1px solid rgba(0,0,0,0.08)",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Toolbar disableGutters sx={{ minHeight: 70 }}>
//           {/* LOGO */}
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: 700,
//                 flexGrow: 1,
//                 background:
//                   "linear-gradient(90deg,#7c7cff,#00e5ff)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Narendra Narwade
//             </Typography>
//           </motion.div>

//           {/* NAV LINKS */}
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             {links.map((link) => (
//               <Button
//                 key={link.path}
//                 component={NavLink}
//                 to={link.path}
//                 sx={{
//                   mx: 1.2,
//                   fontWeight: 500,
//                   color: "text.primary",
//                   position: "relative",
//                   "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     left: 0,
//                     bottom: 4,
//                     width: "0%",
//                     height: "2px",
//                     backgroundColor: "primary.main",
//                     transition: "0.3s",
//                   },
//                   "&:hover::after": {
//                     width: "100%",
//                   },
//                   "&.active": {
//                     color: "primary.main",
//                   },
//                   "&.active::after": {
//                     width: "100%",
//                   },
//                 }}
//               >
//                 {link.label}
//               </Button>
//             ))}

//             {/* THEME TOGGLE */}
//             <IconButton
//               onClick={toggleTheme}
//               sx={{
//                 ml: 1,
//                 border: "1px solid",
//                 borderColor:
//                   mode === "dark"
//                     ? "rgba(255,255,255,0.2)"
//                     : "rgba(0,0,0,0.2)",
//               }}
//             >
//               {mode === "dark" ? (
//                 <LightModeIcon />
//               ) : (
//                 <DarkModeIcon />
//               )}
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;

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
import { motion } from "framer-motion";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contacts" },
];

const Navbar = ({ mode, toggleTheme }) => {
  return (
    // <AppBar
    //   position="fixed"
    //   elevation={0}
    //   sx={{
    //     backgroundColor: "background.paper",
    //     backgroundFilter: "blur(12px)",

    //     // Remove borderBottom
    //     borderBottom: "none",

    //     //Add gradient divider
    //     "&::after": {
    //       content: '""',
    //       position: "absolute",
    //       bottom: 0,
    //       left: "10%",
    //       width: "80%",
    //       height: "1px",
    //       background: (theme) =>
    //         theme.palette.mode === "dark"
    //           ? "linear-gradient(90deg, transparent, rgba(124,124,255,0.6), transparent)"
    //           : "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)",
    //     },

    //     // backgroundColor:
    //     //   mode === "dark"
    //     //     ? "rgba(15,23,42,0.85)"
    //     //     : "rgba(255,255,255,0.85)",
    //     // backdropFilter: "blur(12px)",
    //     // borderBottom:
    //     //   mode === "dark"
    //     //     ? "1px solid rgba(255,255,255,0.08)"
    //     //     : "1px solid rgba(0,0,0,0.08)",
    //   }}
    // >
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        backdropFilter: "blur(12px)",
        borderBottom: "none",

        // 🔥 Soft bottom shadow instead of line
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "0 6px 20px rgba(0,0,0,0.45)"
            : "0 6px 20px rgba(15,23,42,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 70,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                flexGrow: 1,
                background: "linear-gradient(90deg,#7c7cff,#00e5ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Narendra Narwade
            </Typography>
          </motion.div>

          {/* NAV LINKS */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {links.map((link) => (
              <Button
                key={link.path}
                component={NavLink}
                to={link.path}
                sx={{
                  mx: 1.2,
                  fontWeight: 500,
                  color: "text.primary",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 4,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "primary.main",
                    transition: "0.3s",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                  "&.active": {
                    color: "primary.main",
                  },
                  "&.active::after": {
                    width: "100%",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}

            {/* THEME TOGGLE */}
            <IconButton
              onClick={toggleTheme}
              sx={{
                ml: 1,
                border: "1px solid",
                borderColor:
                  mode === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
              }}
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
