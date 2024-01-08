import React, { useState } from "react";
import "./sass/main.css";
import { ColorModeContext, useMode } from "./theme";
import { Box, Container, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import NavBar from "./global/NavBar";
import { Route, Routes } from "react-router-dom";
import SideBar from "./global/SideBar";
import Dashboard from "./Components/home/Dashboard";
import Team from "./Components/team";
import Contacts from "./Components/contacts";
import Invoices from "./Components/invoices";
import Bar from "./Components/bar";
import Form from "./Components/form";
import Pie from "./Components/pie";
import Line from "./Components/line";
import FAQ from "./Components/faq";
import Calendar from "./Components/calendar";
import Geography from "./Components/geography";
import { MyContext } from "./MyContext";
import Link from "@mui/material/Link";

function App() {
  const [theme, colorMode] = useMode();
  const [sidebarWidth, setSidebarWidth] = useState(0);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MyContext.Provider value={{ sidebarWidth, setSidebarWidth }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={"App !min-h-screen flex"}>
            <SideBar />
            <main className="content overflow-x-hidden">
              <NavBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
              <Box
                mb={'1.5rem'}
                component="footer"
              >
                <Container maxWidth="sm">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {"Copyright © "}
                    <Link target="_blank" color="inherit" href="https://www.linkedin.com/in/moaaz-tarek-93304a263">
                      Moaaz Tarek
                    </Link>{" "}
                    {new Date().getFullYear()}
                    {"."}
                  </Typography>
                </Container>
              </Box>
            </main>
          </div>
        </ThemeProvider>
      </MyContext.Provider>
    </ColorModeContext.Provider>
  );
}

export default App;
