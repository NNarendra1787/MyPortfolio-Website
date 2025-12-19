// import React from 'react'
// import { Container, Typography, Box, Link } from "@mui/material";

// function Contact() {
//   return (
//    <Container maxWidth="lg" sx={{ py: 8 }}>
//       <Typography variant="h4" fontWeight="bold" gutterBottom>
//         Contact
//       </Typography>

//       <Box sx={{ maxWidth: 600 }}>
//         <Typography
//           variant="body1"
//           color="text.secondary"
//           sx={{ mb: 2 }}
//         >
//           Feel free to reach out to me for job opportunities, collaborations, or
//           any professional discussion.
//         </Typography>

//         <Typography sx={{ mb: 1 }}>
//           📧 Email:{" "}
//           <Link href="mailto:nnarendra1787@gmail.com">
//             nnarendra1787@gmail.com
//           </Link>
//         </Typography>

//         <Typography sx={{ mb: 1 }}>
//           💻 GitHub:{" "}
//           <Link
//             href="https://github.com/NNarendra1787"
//             target="_blank"
//           >
//             github.com/NNarendra1787
//           </Link>
//         </Typography>

//         <Typography>
//           🔗 LinkedIn:{" "}
//           <Link
//             href="https://www.linkedin.com/in/narendra-j-narwade-678355275"
//             target="_blank"
//           >
//             linkedin.com/in/narendra-j-narwade
//           </Link>
//         </Typography>
//       </Box>
//     </Container>
//   )
// }

// export default Contact

import React from "react";
import { Container, Typography, Box, Link, Card } from "@mui/material";
import { motion } from "framer-motion";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Contact() {
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
          Contact
        </Typography>
      </motion.div>

      {/* CONTACT CARD */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card
          sx={{
            maxWidth: 650,
            mt: 3,
            p: 4,
            borderRadius: 4,
            backdropFilter: "blur(14px)",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, lineHeight: 1.8 }}
          >
            Feel free to reach out to me for job opportunities, collaborations,
            or any professional discussion.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Typography>
              📧 Email:{" "}
              <Link
                href="mailto:nnarendra1787@gmail.com"
                sx={{ fontWeight: 500 }}
              >
                nnarendra1787@gmail.com
              </Link>
            </Typography>

            <Typography>
              📞 Contact:{" "}
              <Link
                href="tel:+91XXXXXXXXXX"
                sx={{ fontWeight: 500 }}
              >
                +91 90492 03312
              </Link>
            </Typography>

            <Typography>
              💻 GitHub:{" "}
              <Link
                href="https://github.com/NNarendra1787"
                target="_blank"
                sx={{
                  fontWeight: 500,
                  "&:hover": { color: "#7c7cff" },
                }}
              >
                github.com/NNarendra1787
              </Link>
            </Typography>

            <Typography>
              🔗 LinkedIn:{" "}
              <Link
                href="https://www.linkedin.com/in/narendra-j-narwade-678355275"
                target="_blank"
                sx={{
                  fontWeight: 500,
                  "&:hover": { color: "#7c7cff" },
                }}
              >
                linkedin.com/in/narendra-j-narwade
              </Link>
            </Typography>
          </Box>
        </Card>
      </motion.div>
    </Container>
  );
}

export default Contact;


