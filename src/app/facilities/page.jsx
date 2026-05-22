import FacilityCard from "@/components/FacilityCard";

const FacilityPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility`,   {
    cache: "no-store",
  })
    const facilities = await res.json() 


    return (
        <div className="max-w-7xl mx-auto">
            <h1>All facilities</h1>


            <div className="grid grid-cols-4 gap-5">
                {
                    facilities.map(facility => <FacilityCard key={facility._id} facility={facility}/>)
                }

            </div>

        </div>
    );
};

export default FacilityPage;