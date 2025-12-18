import Navbar from "../components/Navbar";

export default function GroupStays() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-32">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-800 mb-4">Group Ayurvedic Stays</h1>
          <p className="text-xl text-gray-700">Heal together with friends and family</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">💜 Benefits of Group Stays</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Shared healing experience</li>
                <li>✓ Special group discounts</li>
                <li>✓ Customized group activities</li>
                <li>✓ Private group sessions</li>
              </ul>
            </div>
            
            <div className="p-6 bg-pink-50 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-800 mb-4">🌸 Perfect For</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Corporate wellness retreats</li>
                <li>• Friend getaways</li>
                <li>• Family healing sessions</li>
                <li>• Special celebrations</li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Group Packages</h3>
            <p className="text-gray-700 mb-6">
              We offer specially curated group packages for 4-20 people. Each package includes private consultations, 
              group yoga and meditation sessions, traditional Ayurvedic treatments, and customized meal plans.
            </p>
            
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Starting from $1,999 per person</h4>
              <p className="text-gray-700 mb-4">7-night package for groups of 4 or more</p>
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Request Group Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

