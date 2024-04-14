import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";

function Workflow() {
  return (
    <div className="relative pb-10 ">
      <div className="text-center mt-10 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">
          Accelerate your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-800">
            coding workflow.
          </span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 mt-10 p-2 ">
          <img className="rounded-md " src="/code.jpg" alt="code" />
        </div>
        <div className="w-full lg:w-1/2 pt-20 space-y-4 ">
          {checklistItems.map((item, index) => (
            <div key={index}>
              <div className="flex gap-4 mx-4">
                <div className="flex justify-center  items-center h-10 w-10 text-green-700  rounded-full">
                  <CheckCircle2 />
                </div>
                <div className="mt-2">
                  <h5>{item.title}</h5>
                  <p className=" font-extralight text-zinc-500 mt-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Workflow;
