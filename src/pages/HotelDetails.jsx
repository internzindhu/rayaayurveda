import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HotelDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Hotel Details</h1>
        <p className="text-gray-600 mb-4">Hotel ID: {id}</p>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700">Detailed hotel information will be displayed here.</p>
          <p className="text-gray-600 mt-4">This is a demo version without backend integration.</p>
        </div>
      </div>
    </div>
  );
}

