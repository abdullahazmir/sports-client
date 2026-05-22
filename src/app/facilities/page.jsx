import FacilityCard from "@/components/FacilityCard";

const FacilityPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/facility`,
    {
      cache: "no-store",
    }
  );

  const facilities = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
      
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mt-4 mb-6">
        All facilities
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {facilities.map((facility) => (
          <FacilityCard key={facility._id} facility={facility} />
        ))}
      </div>
      
    </div>
  );
};

export default FacilityPage;