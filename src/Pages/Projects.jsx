// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   Chip,
//   Stack,
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
//     title: "AI / API Based Application",
//     description:
//       "An application integrating modern APIs and AI-based features to demonstrate real-world API consumption.",
//     tech: ["React", "API", "AI"],
//     live: "#",
//     github: "#",
//   },
//   {
//     title: "React Admin Dashboard",
//     description:
//       "A responsive admin dashboard built with Material UI, featuring charts, tables, and reusable components.",
//     tech: ["React", "Material UI", "Charts"],
//     live: "#",
//     github: "#",
//   },
//   {
//     title: "Logic / Learning Project",
//     description:
//       "A project focused on problem-solving and algorithmic thinking to strengthen core logic and fundamentals.",
//     tech: ["JavaScript", "Algorithms"],
//     live: "#",
//     github: "#",
//   },
// ];


// function Projects() {
//   return (
//       <Container maxWidth="lg" sx={{ py: 8 }}>
//       {/* Page Title */}
//       <Typography variant="h4" fontWeight="bold" gutterBottom>
//         Projects
//       </Typography>

//       <Typography color="text.secondary" sx={{ mb: 5, maxWidth: 700 }}>
//         Here are some of the projects I’ve built to demonstrate my skills in
//         full stack development, API integration, and problem solving.
//       </Typography>

//       {/* Projects Grid */}
//       <Grid container spacing={4}>
//         {projects.map((project) => (
//           <Grid item xs={12} md={6} key={project.title}>
//             <Card
//               sx={{
//                 height: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 transition: "0.3s",
//                 "&:hover": {
//                   transform: "translateY(-8px)",
//                   boxShadow: 6,
//                 },
//               }}
//             >
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography variant="h6" fontWeight="bold">
//                   {project.title}
//                 </Typography>

//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ mt: 1 }}
//                 >
//                   {project.description}
//                 </Typography>

//                 {/* Tech Stack */}
//                 <Stack direction="row" spacing={1} sx={{ mt: 2 }} flexWrap="wrap">
//                   {project.tech.map((tech) => (
//                     <Chip key={tech} label={tech} size="small" />
//                   ))}
//                 </Stack>
//               </CardContent>

//               {/* Action Buttons */}
//               <CardActions sx={{ px: 2, pb: 2 }}>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   href={project.live}
//                   target="_blank"
//                 >
//                   Live
//                 </Button>
//                 <Button
//                   size="small"
//                   variant="outlined"
//                   href={project.github}
//                   target="_blank"
//                 >
//                   GitHub
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   )
// }

// export default Projects

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

const projects = [
  {
    title: "Product & Supplier Management System",
    description:
      "A full stack MERN application for managing products and suppliers with CRUD operations, REST APIs, and a clean admin UI.",
    tech: ["React", "Material UI", "Node.js", "Express", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "MERN Authentication System",
    description:
      "JWT-based authentication system with secure login, signup, protected routes, and password hashing.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "#",
    github: "#",
  },
  {
    title: "Book Store Application",
    description:
      "React-based book store app with product listing, cart functionality, and modern UI.",
    tech: ["React", "API", "CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "PrepBytes UI Clone",
    description:
      "Frontend clone of PrepBytes platform focusing on responsive UI and component-based architecture.",
    tech: ["React", "Material UI"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom mt="20px">
        Projects
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 5, maxWidth: 700 }}
      >
        Here are some of the projects I’ve built to demonstrate my skills in full
        stack development, API integration, and problem solving.
      </Typography>

      {/* CSS GRID (THE FIX) */}
      <Box
        sx={{
          display: "grid",
          
          gridTemplateColumns: {
            xs: "1fr",
            md: "2fr 2fr",
          },
          gap: 4,
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 3,
            }}
          >
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

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {project.tech.map((tech, i) => (
                  <Chip key={i} label={tech} size="small" />
                ))}
              </Box>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button variant="contained" size="small" href={project.live}>
                Live
              </Button>
              <Button variant="outlined" size="small" href={project.github}>
                GitHub
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;

