// import React from 'react'
// import { Container, Typography, Box } from "@mui/material";

// function About() {
//   return (
//         <Container maxWidth="lg" sx={{ py: 8 }}>
//       <Typography variant="h4" fontWeight="bold" gutterBottom>
//         About Me
//       </Typography>

//       <Box sx={{ maxWidth: 800 }}>
//         <Typography
//           variant="body1"
//           color="text.secondary"
//           sx={{ lineHeight: 1.8, mb: 2 }}
//         >
//           I am an MCA student with a strong interest in Full Stack and MERN
//           development. I enjoy building real-world web applications that solve
//           practical problems and follow clean coding practices.
//         </Typography>

//         <Typography
//           variant="body1"
//           color="text.secondary"
//           sx={{ lineHeight: 1.8, mb: 2 }}
//         >
//           My experience includes working with React, Node.js, Express, MongoDB,
//           REST APIs, and modern UI libraries like Material UI. I focus on writing
//           scalable, maintainable code and continuously improving my technical
//           skills.
//         </Typography>

//         <Typography
//           variant="body1"
//           color="text.secondary"
//           sx={{ lineHeight: 1.8 }}
//         >
//           I am looking for opportunities as a Full Stack Developer where I can
//           contribute to meaningful projects, learn from experienced developers,
//           and grow professionally.
//         </Typography>
//       </Box>
//     </Container>
//   )
// }

// export default About

import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import ProfileImg from "../assets/profileNarendra.png";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            background: "linear-gradient(90deg,#7c7cff,#00e5ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Me
        </Typography>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card
          sx={{
            mt: 4,
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            backdropFilter: "blur(14px)",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "2fr 1fr",
              },
              gap: 4,
              alignItems: "center",
            }}
          >
            {/* LEFT: TEXT */}
            <Box>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.8, mb: 2 }}
              >
                I am an MCA student with a strong interest in Full Stack and MERN
                development. I enjoy building real-world web applications that
                solve practical problems and follow clean coding practices.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.8, mb: 2 }}
              >
                My experience includes working with React, Node.js, Express,
                MongoDB, REST APIs, and modern UI libraries like Material UI. I
                focus on writing scalable, maintainable code and continuously
                improving my technical skills.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.8 }}
              >
                I am looking for opportunities as a Full Stack Developer where I
                can contribute to meaningful projects, learn from experienced
                developers, and grow professionally.
              </Typography>
            </Box>

            {/* RIGHT: IMAGE */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={ProfileImg}
                alt="Narendra Narwade"
                sx={{
                  width: 220,
                  height: 220,
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "3px solid rgba(124,124,255,0.6)",
                  boxShadow: "0 0 40px rgba(124,124,255,0.4)",
                }}
              />
            </Box>
          </Box>
        </Card>
      </motion.div>
    </Container>
  );
}

export default About;

