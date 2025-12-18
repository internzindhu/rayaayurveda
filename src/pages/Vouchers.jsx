import Navbar from "../components/Navbar";

export default function Vouchers() {
  const vouchers = [
    { id: 1, name: "Weekend Wellness Getaway", value: "$500", image: "/voucher1.jpg" },
    { id: 2, name: "7-Day Healing Retreat", value: "$2,000", image: "/voucher1.jpg" },
    { id: 3, name: "Couple's Ayurvedic Experience", value: "$1,500", image: "/voucher1.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-800 mb-4">Gift Vouchers</h1>
          <p className="text-xl text-gray-700">Give the gift of wellness and healing</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vouchers.map((voucher) => (
            <div key={voucher.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl mb-2">🎁</p>
                  <p className="text-3xl font-bold text-purple-800">{voucher.value}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{voucher.name}</h3>
                <button className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold transition-colors">
                  Purchase Voucher
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">How Gift Vouchers Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">1️⃣</div>
              <h4 className="font-semibold text-gray-800 mb-2">Choose Amount</h4>
              <p className="text-gray-600">Select from our pre-set vouchers or create a custom amount</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">2️⃣</div>
              <h4 className="font-semibold text-gray-800 mb-2">Personalize</h4>
              <p className="text-gray-600">Add a personal message and recipient details</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">3️⃣</div>
              <h4 className="font-semibold text-gray-800 mb-2">Send or Print</h4>
              <p className="text-gray-600">Email directly or print a beautiful certificate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

