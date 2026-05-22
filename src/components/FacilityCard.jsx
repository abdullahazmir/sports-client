import { Button, Calendar } from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";
const FacilityCard = ({ facility }) => {
  const { _id, image, facilityName, facilityType, location, pricePerHour, capacity, availableTimeSlots,description } = facility;

  return (
    <div className="border">
      <Image
        className=""
        alt={facilityName}
        src={image}
        height={400}
        width={400}
      />

      <div className="p-2">
        <div className="flex items-center gap-1">
          <LuMapPin /> <span>{capacity}</span>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h2 className="text-xl font-bold">{facilityName}</h2>
            </div>
            <div className="flex gap-1 items-center">
              <FaRegCalendar /> {location}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold">$ {pricePerHour}</h3>
          </div>
        </div>
        <Link href={`/facilities/${_id}`}><Button variant="ghost" className={'mt-1 text-cyan-500'}> <FiExternalLink/> Book Now</Button></Link>
      </div>
    </div>
  );
};

export default FacilityCard;