import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/SearchBar";
import Jobs from "../FindJobs/Jobs";
import { useEffect } from "react";

const FindJobs = () => {
  useEffect(() => {
    // Scroll to top when the component is mounted or visited
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <SearchBar />
      <Divider size="sm" mx="md" />
      <Jobs />
    </div>
  );
};

export default FindJobs;
