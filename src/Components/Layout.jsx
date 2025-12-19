// import React from "react";
// import { Box } from "@mui/material";
// import { Outlet } from "react-router-dom";

// function Layout() {
//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         width: "100%",
//         background:
//           "linear-gradient(180deg, #0f172a 0%, #020617 100%)",
//         pt: "80px",
//       }}
//     >
//       <Outlet />
//     </Box>
//   );
// }

// export default Layout;

import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          pt: "64px",
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "linear-gradient(180deg, #0f172a 0%, #020617 100%)"
              : "linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
