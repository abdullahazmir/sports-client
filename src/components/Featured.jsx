import { Button } from "@heroui/react";
import Link from "next/link";
import FacilityCard from "./FacilityCard";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const facilities = await res.json();

  return (
    <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Featured Facilities
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>

        <Link href={"/facilities"} className="w-full sm:w-auto">
          <Button
            variant="outline"
            className="rounded-none border-cyan-500 border-2 text-cyan-500 w-full sm:w-auto"
          >
            All Facilities
          </Button>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {facilities.map((facility) => (
          <FacilityCard key={facility._id} facility={facility} />
        ))}
      </div>
    </div>
  );
};

export default Featured;