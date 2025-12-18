import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function IndividualStays() {
  const hotels = [
    {
      id: 1,
      name: "Tranquil Palms Ayurveda Resort",
      location: "Sri Lanka",
      price: "$2,500",
      duration: "7 nights",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      rating: 4.8
    },
    {
      id: 2,
      name: "Kerala Wellness Retreat",
      location: "India",
      price: "$2,200",
      duration: "7 nights",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
      rating: 4.9
    },
    {
      id: 3,
      name: "Himalayan Healing Center",
      location: "India",
      price: "$3,000",
      duration: "10 nights",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#181818] mb-4">Individual Ayurvedic Stays</h1>
          <p className="text-xl text-gray-700">Personalized wellness journeys tailored just for you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <Link to={`/book-hotel/${hotel.id}`} key={hotel.id} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-64">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ {hotel.rating}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#5E17EB] transition-colors">
                    {hotel.name}
                  </h3>
                  <p className="text-gray-600 mb-4">📍 {hotel.location}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">{hotel.duration}</p>
                      <p className="text-2xl font-bold text-[#5E17EB]">{hotel.price}</p>
                    </div>
                    <button className="bg-[#5E17EB] hover:bg-[#4B12BD] text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

