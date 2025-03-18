import { Avatar } from "@mantine/core";
import { work } from "../Data/Data";

const Working = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold mb-3 text-mine-shaft-100 text-center">
        How it<span className="text-bright-sun-400">Works</span>
      </div>
      <div className="text-lg mx-auto mb-10 text-mine-shaft-300 text-center w-1/2">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today!
      </div>
      <div className="flex px-16 justify-between items-center">
        <div className="relative">
          <img src="/Working/Girl.png" alt="girl" className="w-[30rem]" />
          <div className="w-36 top-[15%] right-0 absolute flex flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md">
            <Avatar src="avatar2.png" alt="it's me" className="!h-16 !w-16" />
            <div className="text-xm font-semibold text-mine-shaft-200 text-center">
              Complete your profile
            </div>
            <div className="text-xs text-mine-shaft-300">70% Completed</div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {work.map((item, index) => (
            <div className="flex items-center gap-4" key={index}>
              <div className="p-2.5 bg-bright-sun-300 rounded-full">
                <img
                  className="h-12 w-12"
                  src={`/Working/${item.name}.png`}
                  alt={item.name}
                />
              </div>
              <div>
                <div className="text-mine-shaft-200 text-xl font-semibold">
                  {item.name}
                </div>
                <div className="text-base text-mine-shaft-300">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
