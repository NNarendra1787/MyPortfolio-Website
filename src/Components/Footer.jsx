import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 3,
        backgroundColor: "background.paper",
        backdropFilter: "blur(12px)",

        // subtle top shadow instead of border
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "0 -6px 20px rgba(0,0,0,0.4)"
            : "0 -6px 20px rgba(15,23,42,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {/* Left */}
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Narendra Narwade
          </Typography>

          {/* Right */}
          <Typography variant="body2" color="text.secondary">
            Full Stack Developer · MERN · MCA
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
