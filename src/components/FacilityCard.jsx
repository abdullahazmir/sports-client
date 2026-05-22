import { Button } from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";

const FacilityCard = ({ facility }) => {
  const {
    _id,
    image,
    facilityName,
    facilityType,
    location,
    pricePerHour,
    capacity,
    availableTimeSlots,
    description,
  } = facility;

  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white w-full">
      
      {/* Image */}
      <div className="relative w-full h-52 sm:h-56 md:h-60 lg:h-64">
        <Image
          className="object-cover"
          alt={facilityName}
          src={image}
          fill
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        
        {/* Location */}
        <div className="flex items-center gap-1 text-sm sm:text-base text-gray-600">
          <LuMapPin />
          <span className="truncate">{location}</span>
        </div>

        {/* Info */}
        <div className="flex justify-between items-start gap-3 mt-2">
          
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-bold line-clamp-1">
              {facilityName}
            </h2>

            <div className="flex gap-1 items-center text-sm sm:text-base text-gray-600 mt-1">
              <FaRegCalendar />
              <span>{capacity}</span>
            </div>
          </div>

          <div className="shrink-0">
            <h3 className="text-lg sm:text-2xl font-bold text-cyan-500">
              ${pricePerHour}
            </h3>
          </div>
        </div>

        {/* Button */}
        <Link href={`/facilities/${_id}`}>
          <Button
            variant="ghost"
            className="mt-4 text-cyan-500 w-full sm:w-auto"
          >
            <FiExternalLink />
            Book Now
          </Button>
        </Link>

      </div>
    </div>
  );
};

export default FacilityCard;