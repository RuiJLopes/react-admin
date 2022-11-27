import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import SideBart from "./scene/global/SideBar";
import TopBar from "./scene/global/TopBar";
import Dashboard from "./scene/dashboard";
import { ProSidebarProvider } from "react-pro-sidebar";
import Team from "./scene/team";
import Contacts from "./scene/contacts";
import Invoices from "./scene/invoices";
import Form from "./scene/form";
import Calendar from "./scene/calendar";
import Faq from "./scene/faq";
import Bar from "./scene/bar";
import Pie from "./scene/pie";
import Line from "./scene/line";
import Geography from "./scene/geography";

function App() {
  const [theme, colorMode] = useMode();
  console.log("New Route");

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <ProSidebarProvider>
            <SideBart />
          </ProSidebarProvider>
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
