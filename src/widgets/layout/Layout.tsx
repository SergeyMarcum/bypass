import { Box, CssBaseline } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Header />
          {children}
        </Box>
      </Box>
    </>
  );
}
