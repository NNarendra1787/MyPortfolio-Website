import React from 'react'
import { Container, Typography, Box } from "@mui/material";

function About() {
  return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About Me
      </Typography>

      <Box sx={{ maxWidth: 800 }}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 2 }}
        >
          I am an MCA student with a strong interest in Full Stack and MERN
          development. I enjoy building real-world web applications that solve
          practical problems and follow clean coding practices.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 2 }}
        >
          My experience includes working with React, Node.js, Express, MongoDB,
          REST APIs, and modern UI libraries like Material UI. I focus on writing
          scalable, maintainable code and continuously improving my technical
          skills.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.8 }}
        >
          I am looking for opportunities as a Full Stack Developer where I can
          contribute to meaningful projects, learn from experienced developers,
          and grow professionally.
        </Typography>
      </Box>
    </Container>
  )
}

export default About
