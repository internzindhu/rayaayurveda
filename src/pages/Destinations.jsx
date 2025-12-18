import Navbar from "../components/Navbar";

export default function Destinations() {
  const destinations = [
    {
      name: "Sri Lanka",
      description: "Tropical paradise with ancient Ayurvedic traditions",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      highlights: ["Beach resorts", "Traditional practices", "Herbal gardens"]
    },
    {
      name: "India",
      description: "Birthplace of Ayurveda with authentic experiences",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
      highlights: ["Kerala backwaters", "Himalayan retreats", "Authentic treatments"]
    },
    {
      name: "Thailand",
      description: "Blend of Ayurveda with Thai wellness traditions",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      highlights: ["Luxury resorts", "Spa experiences", "Modern facilities"]
    },
    {
      name: "Europe",
      description: "Contemporary Ayurveda in scenic European settings",
      image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=800&q=80",
      highlights: ["Alpine wellness", "Organic cuisine", "European comfort"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#181818] mb-4">Destinations</h1>
          <p className="text-xl text-gray-700">Discover Ayurvedic healing around the world</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-4xl font-bold text-white">{dest.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{dest.description}</p>
                <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                <ul className="space-y-1">
                  {dest.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-600">• {highlight}</li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-[#5E17EB] hover:bg-[#4B12BD] text-white py-3 rounded-lg font-semibold transition-colors">
                  Explore {dest.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

