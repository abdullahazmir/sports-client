import { Button } from "@heroui/react";
import Image from "next/image";

const SportsPromo = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16 px-4">
      
      <div className="flex flex-col md:flex-row items-center gap-10 bg-black text-white p-6 md:p-10">
        
        {/* Text */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Play Your Favorite Sports Anytime
          </h2>

          <p className="text-gray-300">
            Book top-quality football turfs, gyms, and sports arenas across your city.
            Enjoy premium facilities and make your game better than ever.
          </p>

          <Button className="bg-cyan-500 text-white rounded-none">
            Explore Facilities
          </Button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <Image
            src="/assets/sports-banner.jpg"
            alt="sports"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default SportsPromo;