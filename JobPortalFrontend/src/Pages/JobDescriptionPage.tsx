import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDescription from "../JobDescription/JobDescription";
import RecommendedJobs from "../JobDescription/RecommendedJobs";

const JobDescriptionPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Link to="/find-jobs" className="my-5 inline-block">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="#ffbd20"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <div className="flex gap-5 justify-around">
        <JobDescription />
        <RecommendedJobs />
      </div>
    </div>
  );
};

export default JobDescriptionPage;
