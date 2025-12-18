import { Button, Container, Typography, Stack } from '@mui/material'
import React from 'react'

function Home() {
  return (
     <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography variant="h3" fontWeight="bold">
        Hi, I’m Narendra 👋
      </Typography>

      <Typography
        variant="h5"
        color="primary"
        sx={{ mt: 2, maxWidth: 700 }}
      >
        Full Stack Developer | MERN Stack | MCA Student
      </Typography>

      <Typography sx={{ mt: 3, maxWidth: 650, lineHeight: 1.8 }} color="text.secondary">
        I build clean, scalable, real-world web applications using React,
        Node.js, MongoDB and modern tools.
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Button variant="contained" size="large">
          View Projects
        </Button>
        <Button variant="outlined" size="large">
          Download Resume
        </Button>
      </Stack>
    </Container>
  )
}

export default Home
