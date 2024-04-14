function Hero() {
  return (
    <div className="flex flex-col items-center mt-6">
      <div className="text-center text-4xl md:text-6xl lg:text-7xl tracking-wide">
        <h1>
          VirtualR build tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-800">
            for developers
          </span>
        </h1>
      </div>
      <p className="text-center text-xl max-w-4xl mt-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam saepe
        dolorem similique eligendi incidunt, dignissimos facilis? Blanditiis !
      </p>
      <div className="mt-10 space-x-4 flex">
        <a
          href="#"
          className="border bg-gradient-to-r from-orange-500 to-orange-200  rounded-md px-2 py-2 dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-800 "
        >
          Start for free
        </a>
        <a
          href="#"
          className="border rounded-md px-2 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white py-2"
        >
          Documentation
        </a>
      </div>
      <div className="flex justify-center gap-4 mt-10 mx-4">
        <video
          src="/video1.mp4"
          className="w-1/2 border-2 border-orange-700 rounded-md shadow-orange-400 "
          autoPlay
          muted
          loop
        ></video>
        <video
          src="/video2.mp4"
          className="w-1/2 border-2 border-orange-700 shadow-orange-400 rounded-md   "
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
}
export default Hero;
