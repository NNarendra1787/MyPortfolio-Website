import React from 'react'
import { Container, Typography, Box, Link } from "@mui/material";

function Contact() {
  return (
   <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Contact
      </Typography>

      <Box sx={{ maxWidth: 600 }}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          Feel free to reach out to me for job opportunities, collaborations, or
          any professional discussion.
        </Typography>

        <Typography sx={{ mb: 1 }}>
          📧 Email:{" "}
          <Link href="mailto:nnarendra1787@gmail.com">
            nnarendra1787@gmail.com
          </Link>
        </Typography>

        <Typography sx={{ mb: 1 }}>
          💻 GitHub:{" "}
          <Link
            href="https://github.com/NNarendra1787"
            target="_blank"
          >
            github.com/NNarendra1787
          </Link>
        </Typography>

        <Typography>
          🔗 LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/narendra-j-narwade-678355275"
            target="_blank"
          >
            linkedin.com/in/narendra-j-narwade
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}

export default Contact
