import { useEffect } from "react";
import PostJob from "../PostJob/PostJob";

const PostJobPage = () => {
  useEffect(() => {
    // Scroll to top when the component is mounted or visited
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <PostJob />
    </div>
  );
};

export default PostJobPage;
