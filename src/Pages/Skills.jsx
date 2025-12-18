// import React from "react";
// import { Container, Typography, Chip, Stack } from "@mui/material";

// const skills = {
//   Languages: ["JavaScript", "Python", "C", "Java"],
//   Frontend: ["React", "Material UI", "HTML", "CSS"],
//   Backend: ["Node.js", "Express.js"],
//   Database: ["MongoDB", "MySQL", "PostgressSQL"],
//   Tools: ["Git", "GitHub", "Postman", "Vercel", "Render", "Netlify"],
// };

// function Skills() {
//   return (
//     <Container maxWidth="lg" sx={{ py: 8 }}>
//       <Typography variant="h4" fontWeight="bold" gutterBottom>
//         Skills
//       </Typography>

//       {Object.entries(skills).map(([category, items]) => (
//         <div key={category}>
//           <Typography variant="h6" sx={{ mt: 3 }}>
//             {category}
//           </Typography>
//           <Stack direction="row" spacing={1} sx={{ mt: 1 }} flexWrap="wrap">
//             {items.map((skill) => (
//               <Chip key={skill} label={skill} />
//             ))}
//           </Stack>
//         </div>
//       ))}
//     </Container>
//   );
// }

// export default Skills;

import { Box, Card, Typography, LinearProgress } from "@mui/material";

const SkillBar = ({ label, value }) => (
  <Box sx={{ mb: 2 }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: 0.5,
      }}
    >
      <Typography variant="body2">{label}</Typography>
      <Typography variant="body2" color="text.secondary">
        {value}%
      </Typography>
    </Box>
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: 8,
        borderRadius: 5,
        backgroundColor: "rgba(255,255,255,0.15)",
        "& .MuiLinearProgress-bar": {
          borderRadius: 5,
        },
      }}
    />
  </Box>
);

const SkillCard = ({ title, skills }) => (
  <Card
    sx={{
      p: 3,
      height: "100%",
      borderRadius: 3,
      backgroundColor: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
      {title}
    </Typography>
    {skills.map((skill, index) => (
      <SkillBar key={index} {...skill} />
    ))}
  </Card>
);

const Skills = () => {
  return (
    <Box sx={{ minHeight: "100vh", py: 6, mt: 5}}>
      {/* Header */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }} >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Skills
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 700 }}>
          A snapshot of the technologies and tools I work with while building
          modern, scalable web applications.
        </Typography>
      </Box>

      {/* Skills Grid */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 2,
          mt: 6,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "repeat(3, 1fr)",
          },
          gap: 4,
        }}

        id="SkillsSizer"
      >
        <SkillCard
          title="Languages"
          skills={[
            { label: "JavaScript", value: 80 },
            { label: "Python", value: 70 },
            { label: "C", value: 60 },
            { label: "Java", value: 60 },
          ]}
        />

        <SkillCard
          title="Frontend"
          skills={[
            { label: "React", value: 85 },
            { label: "Material UI", value: 80 },
            { label: "HTML", value: 85 },
            { label: "CSS", value: 75 },
          ]}
        />

        <SkillCard
          title="Backend"
          skills={[
            { label: "Node.js", value: 75 },
            { label: "Express.js", value: 70 },
            { label: "REST APIs", value: 75 },
          ]}
        />

        <SkillCard
          title="Database"
          skills={[
            { label: "MongoDB", value: 75 },
            { label: "MySQL", value: 65 },
            { label: "PostgreSQL", value: 60 },
          ]}
        />

        <SkillCard
          title="Tools & Platforms"
          skills={[
            { label: "Git & GitHub", value: 80 },
            { label: "Postman", value: 75 },
            { label: "Vercel / Netlify", value: 70 },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Skills;
