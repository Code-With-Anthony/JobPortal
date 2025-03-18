import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold mb-3 text-mine-shaft-100 text-center">
        Browse <span className="text-bright-sun-400">Job</span> Category
      </div>
      <div className="text-lg mx-auto mb-10 text-mine-shaft-300 text-center w-1/2">
        Effortlessly navigate through the process and land your dream job.
      </div>
      <Carousel
        slideSize="22%"
        slideGap="md"
        loop
        nextControlIcon={<IconArrowRight className="h-8 w-8" />}
        previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
        className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:!opacity-0 hover:[&_button]:!opacity-75"
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] !shadow-bright-sun-300 my-5 transition duration-300 ease-in-out">
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img
                  src={`/Category/${category.name}.png`}
                  alt=""
                  className="h-8 w-8"
                />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold">
                {category.name}
              </div>
              <div className="text-sm text-mine-shaft-300 text-center">
                {category.desc}
              </div>
              <div className="text-bright-sun-300 text-lg">
                {category.jobs}+ new jobs posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
