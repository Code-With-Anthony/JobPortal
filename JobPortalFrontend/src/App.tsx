import { createTheme, Divider, MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FindTalentPage from "./Pages/FindTalentPage";
import TalentProfilePage from "./Pages/TalentProfilePage";
import PostJobPage from "./Pages/PostJobPage";

// Lazy load page components
const HomePage = lazy(() => import("./Pages/HomePage"));
const FindJobs = lazy(() => import("./Pages/FindJobsPage"));

import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/dates/styles.css";

import JobDescriptionPage from "./Pages/JobDescriptionPage";
import ApplyJobPage from "./Pages/ApplyJobPage";
import CompanyPage from "./Pages/CompanyPage";
import PostedJobPage from "./Pages/PostedJobPage";
import JobHistoryPage from "./Pages/JobHistoryPage";

function App() {
  const theme = createTheme({
    fontFamily: "Poppins, sans-serif",
    focusRing: "never",
    colors: {
      "bright-sun": [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b75006",
        "#943c0c",
        "#7a330d",
        "#461902",
      ],
      "mine-shaft": [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
    },
    primaryShade: 4,
    primaryColor: "bright-sun",
  });

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <div className="relative">
            <Header />
            <Divider size="xs" mx="md" />
            <Routes>
              <Route path="/find-jobs" element={<FindJobs />} />
              <Route path="/find-talent" element={<FindTalentPage />} />
              <Route path="/jobs" element={<JobDescriptionPage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/posted-job" element={<PostedJobPage />} />
              <Route path="/apply-job" element={<ApplyJobPage />} />
              <Route path="/post-job" element={<PostJobPage />} />
              <Route path="/job-history" element={<JobHistoryPage />} />
              <Route path="/talent-profile" element={<TalentProfilePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
            <Footer />
          </div>
        </Suspense>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
