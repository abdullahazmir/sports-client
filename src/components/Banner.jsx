import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.png')] bg-no-repeat bg-cover bg-center text-white min-h-screen w-full flex flex-col justify-between items-center">
      
      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 py-10 gap-4">
        
        <h1 className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Discover Your <br /> Next Playground
        </h1>

        <p className="text-gray-300 font-semibold max-w-4xl text-sm sm:text-base md:text-lg lg:text-2xl">
          Explore breathtaking destinations and create unforgettable memories
          <br className="hidden sm:block" />
          with our curated stadium experiences.
        </p>

      </div>

      {/* Bottom Section */}
      <div className="bg-white/30 flex justify-between gap-5 w-full items-center px-4 sm:px-6 md:px-10 py-4">
        
        <Separator
          variant="tertiary"
          orientation="vertical"
          className="hidden sm:block"
        />

      </div>
    </div>
  );
};

export default Banner;