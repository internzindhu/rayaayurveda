import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BookHotel() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to individual-stays by default
    navigate("/individual-stays", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#185B45] mb-4"></div>
        <p className="text-gray-600">Redirecting to Ayurvedic Retreats...</p>
      </div>
    </div>
  );
}

