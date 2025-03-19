import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// Lazy load page components
const HomePage = lazy(() => import("./Pages/HomePage"));
const FindJobs = lazy(() => import("./Pages/FindJobs"));

function App() {
  const theme = {
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Header />
          <Routes>
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
