import { jobList } from "../Data/JobsData";
import Jobcard from "../FindJobs/Jobcard";

const RecommendedJobs = () => {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">Recommend Jobs</div>
      <div className="flex flex-col flex-wrap gap-5 justify-between">
        {jobList.map(
          (job, index) => index < 6 && <Jobcard {...job} key={index} />
        )}
      </div>
    </div>
  );
};

export default RecommendedJobs;
