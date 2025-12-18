import Navbar from "../components/Navbar";

export default function Treatments() {
  const treatments = [
    {
      name: "Abhyanga",
      description: "Traditional full-body oil massage for deep relaxation and detoxification",
      icon: "💆‍♀️",
      benefits: ["Improves circulation", "Reduces stress", "Enhances skin health"]
    },
    {
      name: "Shirodhara",
      description: "Warm oil therapy poured continuously on the forehead",
      icon: "🌊",
      benefits: ["Calms the mind", "Improves sleep", "Reduces anxiety"]
    },
    {
      name: "Panchakarma",
      description: "Comprehensive detoxification and rejuvenation program",
      icon: "🌿",
      benefits: ["Deep cleansing", "Restores balance", "Boosts immunity"]
    },
    {
      name: "Udvartana",
      description: "Herbal powder massage for weight management",
      icon: "🍃",
      benefits: ["Weight loss", "Improves skin texture", "Reduces cellulite"]
    },
    {
      name: "Nasya",
      description: "Nasal therapy for respiratory and sinus health",
      icon: "👃",
      benefits: ["Clears sinuses", "Improves breathing", "Enhances clarity"]
    },
    {
      name: "Kati Basti",
      description: "Localized oil therapy for back pain relief",
      icon: "🔥",
      benefits: ["Relieves back pain", "Strengthens spine", "Improves flexibility"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F4F4] to-[#EAE9E3]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#181818] mb-4">Ayurvedic Treatments</h1>
          <p className="text-xl text-gray-700">Ancient therapies for modern wellness</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{treatment.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{treatment.name}</h3>
              <p className="text-gray-700 mb-4">{treatment.description}</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-[#5E17EB] mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {treatment.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-600">✓ {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-[#EAE9E3] rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-[#181818] mb-4">Interested in these treatments?</h3>
          <p className="text-gray-700 mb-6">Our experts will create a personalized treatment plan for you</p>
          <a href="/consultation" className="inline-block bg-[#5E17EB] hover:bg-[#4B12BD] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}

