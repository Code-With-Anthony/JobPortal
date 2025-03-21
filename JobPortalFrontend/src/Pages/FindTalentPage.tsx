import { Divider } from "@mantine/core";
import SearchBar from "../FindTalent/SearchBar";
import Talents from "../FindTalent/Talents";
import { useEffect } from "react";

const FindTalentPage = () => {
  useEffect(() => {
    // Scroll to top when the component is mounted or visited
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <SearchBar />
      <Divider size="xs" mx="md" />
      <Talents />
    </div>
  );
};

export default FindTalentPage;
