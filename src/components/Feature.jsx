import { features } from "../constants";

function Feature() {
  return (
    <div className="relative mt-20 min-h-[4rem] pb-10 ">
      <div className="text-center">
        <span className="bg-neutral-800  rounded-full uppercase px-3 py-2 text-orange-300 dark:text-orange-500">
          Feature
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-7xl mt-10">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-800">
            your code
          </span>
        </h1>
      </div>
      <div className="flex  flex-wrap mt-10">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex gap-2 mx-4 mt-10  ">
              <div className="flex  justify-center px-2 items-center h-10 w-10 rounded-full  dark:text-orange-700 text-orange-200 bg-neutral-800">
                {feature.icon}
              </div>
              <div className="">
                <h5>{feature.text}</h5>
                <p className="mt-2 font-extralight text-zinc-500 ">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Feature;
