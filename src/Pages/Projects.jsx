

// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   Chip,
//   Box,
// } from "@mui/material";

// const projects = [
//   {
//     title: "Product & Supplier Management System",
//     description:
//       "A full stack MERN application for managing products and suppliers with CRUD operations, REST APIs, and a clean admin UI.",
//     tech: ["React", "Material UI", "Node.js", "Express", "MongoDB"],
//     live: "#",
//     github: "#",
//   },
//   {
//     title: "MERN Authentication System",
//     description:
//       "JWT-based authentication system with secure login, signup, protected routes, and password hashing.",
//     tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
//     live: "#",
//     github: "#",
//   },
//   {
//     title: "Book Store Application",
//     description:
//       "React-based book store app with product listing, cart functionality, and modern UI.",
//     tech: ["React", "API", "CSS"],
//     live: "#",
//     github: "#",
//   },
//   {
//     title: "PrepBytes UI Clone",
//     description:
//       "Frontend clone of PrepBytes platform focusing on responsive UI and component-based architecture.",
//     tech: ["React", "Material UI"],
//     live: "#",
//     github: "#",
//   },
// ];

// const Projects = () => {
//   return (
//     <Container maxWidth="lg" sx={{ py: 8 }}>
//       <Typography variant="h4" fontWeight="bold" gutterBottom mt="20px">
//         Projects
//       </Typography>

//       <Typography
//         color="text.secondary"
//         sx={{ mb: 5, maxWidth: 700 }}
//       >
//         Here are some of the projects I’ve built to demonstrate my skills in full
//         stack development, API integration, and problem solving.
//       </Typography>

//       {/* CSS GRID (THE FIX) */}
//       <Box
//         sx={{
//           display: "grid",
          
//           gridTemplateColumns: {
//             xs: "1fr",
//             md: "2fr 2fr",
//           },
//           gap: 4,
//         }}
//       >
//         {projects.map((project, index) => (
//           <Card
//             key={index}
//             sx={{
//               height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               backgroundColor: "rgba(255,255,255,0.04)",
//               border: "1px solid rgba(255,255,255,0.08)",
//               borderRadius: 3,
//             }}
//           >
//             <CardContent sx={{ flexGrow: 1 }}>
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 {project.title}
//               </Typography>

//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 sx={{ mb: 2, lineHeight: 1.7 }}
//               >
//                 {project.description}
//               </Typography>

//               <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//                 {project.tech.map((tech, i) => (
//                   <Chip key={i} label={tech} size="small" />
//                 ))}
//               </Box>
//             </CardContent>

//             <CardActions sx={{ px: 2, pb: 2 }}>
//               <Button variant="contained" size="small" href={project.live}>
//                 Live
//               </Button>
//               <Button variant="outlined" size="small" href={project.github}>
//                 GitHub
//               </Button>
//             </CardActions>
//           </Card>
//         ))}
//       </Box>
//     </Container>
//   );
// };

// export default Projects;


// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   Chip,
//   Box,
// } from "@mui/material";

// // IMPORT PROJECT IMAGES
// import BigBuddha from "../assets/bb.png";
// import TheSiren from "../assets/TheSiren.png";
// import HubSpot from "../assets/HubSpot.png";
// import Prepbytes from "../assets/Prepbytes.png";
// import BookStore from "../assets/BookStore.png";


// const projects = [
//   {
//     title: "BigBuddha – E-Commerce Platform",
//     description:
//       "A responsive e-commerce web application featuring product listings, cart functionality, and clean UI flows. Built with a focus on component reusability and real-world shopping experience.",
//     tech: ["React", "JavaScript", "CSS", "Netlify"],
//     live: "https://splendorous-fox-dcef47.netlify.app/",
//     github: "https://github.com/NNarendra1787/E-Commerce",
//     image: BigBuddha,
//   },
//   {
//     title: "The Siren – News & Blog Platform",
//     description:
//       "A React-based news and blog platform with categorized content, routing, and reusable card components designed for a clean reading experience.",
//     tech: ["React", "JavaScript", "CSS", "Netlify"],
//     live: "https://neon-stardust-e7315d.netlify.app/",
//     github: "https://github.com/NNarendra1787/React-Project",
//     image: TheSiren,
//   },
//   {
//     title: "HubSpot – Authentication System (JWT)",
//     description:
//       "Authentication system with login and registration UI. JWT-based authentication implemented on the backend (currently offline), showcasing understanding of auth flows and secure access handling.",
//     tech: ["React", "Material UI", "JWT", "Vercel"],
//     live: "https://hub-spot-f.vercel.app/",
//     github: "https://github.com/NNarendra1787/Hub-Spot-F",
//     image: HubSpot,
//   },
//   {
//     title: "PrepBytes – EdTech Website Clone",
//     description:
//       "A frontend clone of the PrepBytes EdTech platform built using React, focusing on responsive layouts, routing, and component-based architecture.",
//     tech: ["React", "JavaScript", "CSS", "Vercel"],
//     live: "https://prepbytes-demo.vercel.app/",
//     github: "https://github.com/NNarendra1787/Prepbytes-Demo",
//     image: Prepbytes,
//   },
//   {
//     title: "BookBack – Book Management System",
//     description:
//       "A book management system designed to manage book records with structured UI and CRUD-style workflows, focusing on practical system design.",
//     tech: ["React", "JavaScript", "CSS"],
//     live: "#",
//     github: "#",
//     image: BookStore,
//   },
// ];

// const Projects = () => {
//   return (
//     <Container maxWidth="lg" sx={{ py: 8 }}>
//       <Typography variant="h4" fontWeight="bold" gutterBottom>
//         Projects
//       </Typography>

//       <Typography color="text.secondary" sx={{ mb: 6, maxWidth: 750 }}>
//         A selection of projects showcasing my experience in building real-world
//         applications, user interfaces, and authentication systems using modern
//         web technologies.
//       </Typography>

//       {/* PROJECT GRID */}
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: {
//             xs: "1fr",
//             md: "1fr 1fr",
//           },
//           gap: 4,
//         }}
//       >
//         {projects.map((project, index) => (
//           <Card
//             key={index}
//             sx={{
//               height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               borderRadius: 3,
//               backgroundColor: "rgba(255,255,255,0.04)",
//               border: "1px solid rgba(255,255,255,0.08)",
//               overflow: "hidden",
//               transition: "0.3s",
//               "&:hover": {
//                 transform: "translateY(-6px)",
//                 boxShadow: 6,
//               },
//             }}
//           >
//             {/* IMAGE */}
//             <Box
//               component="img"
//               src={project.image}
//               alt={project.title}
//               sx={{
//                 width: "100%",
//                 height: 200,
//                 objectFit: "cover",
//               }}
//             />

//             <CardContent sx={{ flexGrow: 1 }}>
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 {project.title}
//               </Typography>

//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 sx={{ mb: 2, lineHeight: 1.7 }}
//               >
//                 {project.description}
//               </Typography>

//               {/* TECH STACK */}
//               <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//                 {project.tech.map((tech, i) => (
//                   <Chip key={i} label={tech} size="small" />
//                 ))}
//               </Box>
//             </CardContent>

//             <CardActions sx={{ px: 2, pb: 2 }}>
//               {project.live !== "#" && (
//                 <Button
//                   variant="contained"
//                   size="small"
//                   href={project.live}
//                   target="_blank"
//                 >
//                   Live
//                 </Button>
//               )}
//               {project.github !== "#" && (
//                 <Button
//                   variant="outlined"
//                   size="small"
//                   href={project.github}
//                   target="_blank"
//                 >
//                   GitHub
//                 </Button>
//               )}
//             </CardActions>
//           </Card>
//         ))}
//       </Box>
//     </Container>
//   );
// };

// export default Projects;


import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

// IMPORT PROJECT IMAGES
import BigBuddha from "../assets/bb.png";
import TheSiren from "../assets/TheSiren.png";
import HubSpot from "../assets/HubSpot.png";
import Prepbytes from "../assets/Prepbytes.png";
import BookStore from "../assets/BookStore.png";

/* ================= PROJECT DATA ================= */
const projects = [
  {
    title: "HubSpot – Authentication System (JWT)",
    description:
      "Authentication system with login and registration UI. JWT-based authentication implemented on the backend (currently offline), showcasing understanding of auth flows and secure access handling.",
    tech: ["React", "Material UI", "JWT", "Vercel"],
    live: "https://hub-spot-f.vercel.app/",
    github: "https://github.com/NNarendra1787/Hub-Spot-F",
    image: HubSpot,
  },
  {
    title: "BigBuddha – E-Commerce Platform",
    description:
      "A responsive e-commerce web application featuring product listings, cart functionality, and clean UI flows. Built with a focus on component reusability and real-world shopping experience.",
    tech: ["React", "JavaScript", "CSS", "Netlify"],
    live: "https://splendorous-fox-dcef47.netlify.app/",
    github: "https://github.com/NNarendra1787/E-Commerce",
    image: BigBuddha,
  },
  {
    title: "The Siren – News & Blog Platform",
    description:
      "A React-based news and blog platform with categorized content, routing, and reusable card components designed for a clean reading experience.",
    tech: ["React", "JavaScript", "CSS", "Netlify"],
    live: "https://neon-stardust-e7315d.netlify.app/",
    github: "https://github.com/NNarendra1787/React-Project",
    image: TheSiren,
  },
  {
    title: "PrepBytes – EdTech Website Clone",
    description:
      "A frontend clone of the PrepBytes EdTech platform built using React, focusing on responsive layouts, routing, and component-based architecture.",
    tech: ["React", "JavaScript", "CSS", "Vercel"],
    live: "https://prepbytes-demo.vercel.app/",
    github: "https://github.com/NNarendra1787/Prepbytes-Demo",
    image: Prepbytes,
  },
  {
    title: "BookBack – Book Management System",
    description:
      "A book management system designed to manage book records with structured UI and CRUD-style workflows, focusing on practical system design.",
    tech: ["React", "JavaScript", "CSS"],
    live: "#",
    github: "#",
    image: BookStore,
  },
];

/* ================= ANIMATION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      {/* SECTION HEADING */}
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
          Projects
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 6, maxWidth: 750 }}>
          A selection of projects showcasing my experience in building real-world
          applications, user interfaces, and authentication systems using modern
          web technologies.
        </Typography>
      </motion.div>

      {/* PROJECT GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: 4,
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -12 }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 4,
                backdropFilter: "blur(14px)",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                transition: "0.3s",
              }}
            >
              {/* IMAGE */}
              <Box sx={{ overflow: "hidden" }}>
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                    transition: "0.4s",
                    "&:hover": {
                      transform: "scale(1.08)",
                    },
                  }}
                />
              </Box>

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, lineHeight: 1.7 }}
                >
                  {project.description}
                </Typography>

                {/* TECH STACK */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.tech.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      sx={{
                        background: "rgba(124,124,255,0.15)",
                        border: "1px solid rgba(124,124,255,0.3)",
                      }}
                    />
                  ))}
                </Box>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2 }}>
                {project.live !== "#" && (
                  <Button
                    variant="contained"
                    size="small"
                    href={project.live}
                    target="_blank"
                  >
                    Live
                  </Button>
                )}
                {project.github !== "#" && (
                  <Button
                    variant="outlined"
                    size="small"
                    href={project.github}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                )}
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;

