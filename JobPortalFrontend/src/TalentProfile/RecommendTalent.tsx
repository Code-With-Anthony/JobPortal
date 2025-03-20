import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const RecommendTalent = () => {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">Recommend Talent</div>
      <div className="flex flex-col flex-wrap gap-5">
        {talents.map(
          (talent, index) => index < 4 && <TalentCard {...talent} key={index} />
        )}
      </div>
    </div>
  );
};

export default RecommendTalent;
