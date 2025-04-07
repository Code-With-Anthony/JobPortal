import { createTheme, Divider, MantineProvider } from "@mantine/core";
import { lazy, memo, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

// Required CSS
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/tiptap/styles.css";
import "./App.css";

// Lazy load pages
const HomePage = lazy(() => import("./Pages/HomePage"));
const FindJobs = lazy(() => import("./Pages/FindJobsPage"));
const FindTalentPage = lazy(() => import("./Pages/FindTalentPage"));
const TalentProfilePage = lazy(() => import("./Pages/TalentProfilePage"));
const PostJobPage = lazy(() => import("./Pages/PostJobPage"));
const JobDescriptionPage = lazy(() => import("./Pages/JobDescriptionPage"));
const ApplyJobPage = lazy(() => import("./Pages/ApplyJobPage"));
const CompanyPage = lazy(() => import("./Pages/CompanyPage"));
const PostedJobPage = lazy(() => import("./Pages/PostedJobPage"));
const JobHistoryPage = lazy(() => import("./Pages/JobHistoryPage"));
const LoginSignupPage = lazy(() => import("./Pages/LoginSignupPage"));
const ProfilePage = lazy(() => import("./Pages/ProfilePage"));

// Application Theme
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

// Memoized Header and Footer to avoid unnecessary re-renders
const MemoizedHeader = memo(Header);
const MemoizedFooter = memo(Footer);

function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <div className="relative">
            <MemoizedHeader />
            <Divider
              size="xs"
              mx="md"
              style={{
                display: window.location.pathname === "/auth" ? "none" : "",
              }}
            />
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
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/auth" element={<LoginSignupPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
            <MemoizedFooter />
          </div>
        </Suspense>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
