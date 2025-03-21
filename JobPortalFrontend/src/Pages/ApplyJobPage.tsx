import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJobForm from "../ApplyJob/ApplyJobForm";
import { useEffect } from "react";

const ApplyJobPage = () => {
  useEffect(() => {
    // Scroll to top when the component is mounted or visited
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Link to="/jobs" className="my-5 inline-block">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="#ffbd20"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <ApplyJobForm />
    </div>
  );
};

export default ApplyJobPage;
