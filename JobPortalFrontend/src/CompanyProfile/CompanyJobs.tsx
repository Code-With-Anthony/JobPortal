import { jobList } from "../Data/JobsData";
import Jobcard from "../FindJobs/Jobcard";

const CompanyJobs = () => {
  return (
    <div className="flex mt-10 flex-wrap gap-3">
      {jobList.map((job, index) => (
        <Jobcard key={index} {...job} />
      ))}
    </div>
  );
};

export default CompanyJobs;
