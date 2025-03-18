import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          {/* <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/find-talent" element={<FindTalent />} />
            <Route path="/upload-job" element={<UploadJob />} />
            <Route path="/about-us" element={<AboutUs />} /> */}
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
