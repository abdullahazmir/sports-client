import { Card } from "@heroui/react";

const SportsStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-7xl mx-auto px-4">
      
      <Card className="p-4 text-center rounded-none border">
        <h2 className="text-3xl font-bold text-cyan-500">120+</h2>
        <p className="text-gray-600">Facilities</p>
      </Card>

      <Card className="p-4 text-center rounded-none border">
        <h2 className="text-3xl font-bold text-cyan-500">5K+</h2>
        <p className="text-gray-600">Happy Users</p>
      </Card>

      <Card className="p-4 text-center rounded-none border">
        <h2 className="text-3xl font-bold text-cyan-500">1.2K</h2>
        <p className="text-gray-600">Bookings</p>
      </Card>

      <Card className="p-4 text-center rounded-none border">
        <h2 className="text-3xl font-bold text-cyan-500">50+</h2>
        <p className="text-gray-600">Sports Events</p>
      </Card>

    </div>
  );
};

export default SportsStats;