import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.png')] bg-no-repeat bg-cover min-h-screen w-screen bg-center text-white  flex justify-between flex-col items-center  gap-5 h-150">
      <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-7xl">
          Discover Your <br /> Next Playground
        </h1>

        <p className="text-2xl text-red-800">
          Explore breathtaking destinations and create unforgettable memories <br />
          with our curated stadium experiences.
        </p>

      
      </div>

      <div className=" bg-white/30 flex justify-between gap-5 w-full items-center">
       

         <Separator variant="tertiary" orientation="vertical" />

       



        
      </div>
    </div>
  );
};

export default Banner;