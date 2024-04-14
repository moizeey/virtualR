import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";

function Pricing() {
  return (
    <div className="relative mt-10">
      <h2 className="text-3xl sm:text-4xl lg:text-7xl tracking-wide text-center">
        Pricing
      </h2>

      <div className="flex  flex-wrap mt-10">
        {pricingOptions.map((option, index) => (
          <div className="w-full p-2  sm:w-1/2  lg:w-1/3" key={index}>
            <div className="border  border-neutral-700 rounded-xl p-10">
              <h2 className="text-3xl ">
                {option.title}

                {option.title === "Pro" && (
                  <span className="text-xl px-2 bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-800">
                    (Most popular)
                  </span>
                )}
              </h2>
              <h3 className="text-3xl mt-6">
                {option.price}{" "}
                <span className="text-zinc-500 text-sm">/Month</span>
              </h3>
              <ul className="mt-4">
                {option.features.map((feauture, index) => (
                  <div key={index} className="flex gap-4 py-2">
                    <CheckCircle2 />
                    <li>{feauture}</li>
                  </div>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center w-full border border-orange-900 mt-20 h-12 rounded-lg text-xl   tracking-tight dark:hover:bg-orange-900 transition duration-200 p-6 hover:bg-orange-500 hover:text-white dark:hover:border-white "
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Pricing;
