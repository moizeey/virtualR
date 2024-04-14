import { testimonials } from "../constants";

function Testemonials() {
  return (
    <div className="relative mt-20">
      <h2 className="text-3xl sm:text-5xl text-center lg:text-7xl">
        What people are saying
      </h2>
      <div className="flex flex-wrap mt-20">
        {testimonials.map((item, index) => (
          <div className="w-full sm:w-1/2 p-2 lg:w-1/3">
            <div className="border-neutral-700 dark:bg-zinc-900 border rounded-lg p-6">
              <p className="font-extralight">{item.text}</p>
              <div className="mt-10 flex space-x-4">
                <img
                  src={item.image}
                  alt="users"
                  className="h-10 border border-white w-10 rounded-full"
                />
                <div>
                  <h5 className="font-light ">{item.user}</h5>
                  <p className="font-extralight text-zinc-500 text-sm tracking-wide">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Testemonials;
