import { lazy, Suspense } from "react";
import DreamJob from "../LandingPage/DreamJob";

// Lazy load less critical components
const Companies = lazy(() => import("../LandingPage/Companies"));
const JobCategory = lazy(() => import("../LandingPage/JobCategory"));
const Working = lazy(() => import("../LandingPage/Working"));
const Testimonials = lazy(() => import("../LandingPage/Testimonials"));
const Subscribe = lazy(() => import("../LandingPage/Subscribe"));

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950">
      <DreamJob />
      <Suspense fallback={<div className="component-loading">Loading...</div>}>
        <Companies />
        <JobCategory />
        <Working />
        <Testimonials />
        <Subscribe />
      </Suspense>
    </div>
  );
};

export default HomePage;
