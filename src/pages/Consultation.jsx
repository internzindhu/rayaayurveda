import Navbar from "../components/Navbar";

export default function Consultation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F4F4] to-[#EAE9E3]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-32">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#181818] mb-4">Book a Consultation</h1>
          <p className="text-xl text-gray-700">Speak with our Ayurvedic experts</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-center p-4 bg-[#EAE9E3] rounded-lg">
              <span className="text-3xl mr-4">📞</span>
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-700">+421 903 244</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-[#EAE9E3] rounded-lg">
              <span className="text-3xl mr-4">✉️</span>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-700">rayalognlife@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-[#EAE9E3] rounded-lg">
              <span className="text-3xl mr-4">💬</span>
              <div>
                <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                <p className="text-gray-700">Message us for instant response</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-[#EAE9E3] rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">What to Expect</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Free 30-minute consultation</li>
              <li>Personalized wellness assessment</li>
              <li>Custom treatment recommendations</li>
              <li>Resort and program selection guidance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

