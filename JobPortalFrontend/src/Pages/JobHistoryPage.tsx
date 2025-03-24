import { useEffect } from "react";
import JobHistory from "../JobHistory/JobHistory";

const JobHistoryPage = () => {
  useEffect(() => {
    // Scroll to top when the component is mounted or visited
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <div className="">
        <JobHistory />
      </div>
    </div>
  );
};

export default JobHistoryPage;
