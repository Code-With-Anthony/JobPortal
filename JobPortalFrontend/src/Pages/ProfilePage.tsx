import { Button } from "@mantine/core";
import Profile from "../Profile/Profile";
import { profile } from "../Data/TalentData";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
const ProfilePage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Link to="/find-talent" className="my-5 inline-block">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="#ffbd20"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <Profile {...profile} />
    </div>
  );
};

export default ProfilePage;
