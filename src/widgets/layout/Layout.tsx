import { Box, CssBaseline } from "@mui/material";
import Header from "../header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
    </>
  );
}
