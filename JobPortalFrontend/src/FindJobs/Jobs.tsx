import { jobList } from "../Data/JobsData";
import Jobcard from "./Jobcard";
import Sort from "./Sort";

const Jobs = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between mt-5">
        <div className="text-2xl font-semibold">Recommeded Jobs</div>
        <Sort />
      </div>
      <div className="flex mt-10 flex-wrap gap-5">
        {jobList.map((job, index) => (
          <Jobcard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
