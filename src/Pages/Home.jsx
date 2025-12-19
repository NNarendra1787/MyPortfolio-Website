// import { Button, Container, Typography, Stack } from "@mui/material";
// import React from "react";

// function Home() {
//   return (
//     <Container maxWidth="lg" sx={{ py: 10 }}>
//       <Typography variant="h3" fontWeight="bold">
//         Hi, I’m Narendra 👋
//       </Typography>

//       <Typography variant="h5" color="primary" sx={{ mt: 2, maxWidth: 700 }}>
//         Full Stack Developer | MERN Stack | MCA Student
//       </Typography>

//       <Typography
//         sx={{ mt: 3, maxWidth: 650, lineHeight: 1.8 }}
//         color="text.secondary"
//       >
//         I build clean, scalable, real-world web applications using React,
//         Node.js, MongoDB and modern tools.
//       </Typography>

//       <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
//         <Button variant="contained" size="large">
//           View Projects
//         </Button>
//         <Button
//           variant="outlined"
//           size="large"
//           component="a"
//           href="/NarendraResume.pdf"
//           download
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Download Resume
//         </Button>
//       </Stack>
//     </Container>
//   );
// }

// export default Home;


import { Button, Container, Typography, Stack, Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

/* ===== Animation ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 14 } }}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        {/* NAME */}
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(90deg,#7c7cff,#00e5ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hi, I’m Narendra 👋
        </Typography>

        {/* ROLE */}
        <Typography
          variant="h5"
          sx={{ mt: 2, maxWidth: 700, fontWeight: 500 }}
          color="primary"
        >
          Full Stack Developer | MERN Stack | MCA Student
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            mt: 3,
            maxWidth: 650,
            lineHeight: 1.8,
            fontSize: "1.05rem",
          }}
          color="text.secondary"
        >
          I build clean, scalable, real-world web applications using React,
          Node.js, MongoDB and modern tools.
        </Typography>

        {/* BUTTONS */}
        <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
          <Button
            variant="contained"
            size="large"
            href="./projects"
            sx={{
              px: 4,
              py: 1.4,
              boxShadow: "0 10px 30px rgba(124,124,255,0.4)",
            }}
          >
            View Projects
          </Button>

          <Button
            variant="outlined"
            size="large"
            component="a"
            href="/NarendraResume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              py: 1.4,
              borderColor: "rgba(124,124,255,0.6)",
              "&:hover": {
                borderColor: "#7c7cff",
                background: "rgba(124,124,255,0.08)",
              },
            }}
          >
            Download Resume
          </Button>
        </Stack>
      </motion.div>

      {/* BACKGROUND GLOW */}
      <Box
        sx={{
          position: "absolute",
          top: "-200px",
          right: "-200px",
          width: 400,
          height: 400,
          background: "radial-gradient(#7c7cff, transparent 70%)",
          filter: "blur(120px)",
          zIndex: -1,
        }}
      />
    </Container>
  );
}

export default Home;
