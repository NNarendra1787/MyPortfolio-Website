// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import { useState } from "react";
// import "./App.css"

// import { darkTheme, lightTheme } from "./Themes/Themes";

// import Navbar from "./Components/Navbar";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Skills from "./Pages/Skills";
// import Projects from "./Pages/Projects";
// import Contact from "./Pages/Contact";
// import Layout from "./Components/Layout";

// function App() {
//   const [mode, setMode] = useState("dark");

//   const toggleTheme = () => {
//     setMode((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   return (
//     <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
//       <CssBaseline />
//       <BrowserRouter>
//         <Navbar mode={mode} toggleTheme={toggleTheme} />
//         <Routes>
//           <Route element={<Layout />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contacts" element={<Contact />} />
//         </Routes>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import "./App.css";

import { darkTheme, lightTheme } from "./Themes/Themes";

import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  const [mode, setMode] = useState("dark");

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        {/* Navbar stays OUTSIDE routes */}
        <Navbar mode={mode} toggleTheme={toggleTheme} />

        <Routes>
          {/* Layout wrapper */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

