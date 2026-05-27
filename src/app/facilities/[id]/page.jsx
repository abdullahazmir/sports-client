import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { headers } from "next/headers";
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

const FacilityDetailsPage = async ({ params }) => {
  const { id } = await params;
  const token = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${id}`,
    // {
    //     headers:{
    //         authorization: `Bearer ${token}`
    //     }
    // }
  );

  const facility = await res.json();

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
      
      {/* Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 mt-5 mb-3">
        <EditModal facility={facility} />
        <DeleteAlert facility={facility} />
      </div>

      {/* Image */}
      <div className="w-full">
        <Image
          className="w-full h-60 sm:h-80 md:h-[450px] object-cover rounded-lg"
          alt={facilityName}
          src={image}
          height={500}
          width={800}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8 mt-6">
        
        {/* Left side */}
        <div className="flex-1 p-2">
          
          <div className="flex items-center gap-1 text-sm sm:text-base text-gray-600">
            <LuMapPin />
            <span>{location}</span>
          </div>

          <div className="mt-2">
            <h2 className="text-xl sm:text-2xl font-bold">
              {facilityName}
            </h2>

            <div className="flex flex-wrap gap-2 items-center mt-2 text-sm sm:text-base">
              <FaRegCalendar />
              <span>
                {Array.isArray(availableTimeSlots)
                  ? availableTimeSlots.join(", ")
                  : availableTimeSlots}
              </span>
            </div>
          </div>

          <h1 className="mt-8 text-xl sm:text-2xl font-bold">
            Overview
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-gray-600 mt-2">
            {description}
          </p>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-[350px]">
          <BookingCard facility={facility} />
        </div>

      </div>
    </div>
  );
};

export default FacilityDetailsPage;