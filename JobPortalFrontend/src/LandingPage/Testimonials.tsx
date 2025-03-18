import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold mb-3 text-mine-shaft-100 text-center">
        What <span className="text-bright-sun-400">User</span> says about us?
      </div>
      <div className="flex justify-evenly">
        {testimonials.map((data, index) => (
          <div
            className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 p-3 rounded-xl mt-10"
            key={index}
          >
            <div className="flex gap-2 items-center">
              <Avatar src="avatar.png" alt="it's me" className="!h-14 !w-14" />
              <div>
                <div className="text-lg text-mine-shaft-100 font-semibold">
                  {data.name}
                </div>
                <Rating value={data.rating} readOnly />
              </div>
            </div>
            <div className="text-xs text-mine-shaft-300">
              {data.testimonial}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
