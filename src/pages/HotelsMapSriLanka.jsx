import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import HotelsMapView from "../components/HotelsMapView";

// Standalone map page for the Sri Lanka individual stays. Shows every retreat
// that has coordinates on one map. Reached from:
//   - the "VIEW ON MAP" action in the search bar (browse all)
//   - the "View map" action on a hotel detail page, which deep-links with
//     ?hotel=<uuid> so that hotel's pin is highlighted and focused.
export default function HotelsMapSriLanka() {
  const [searchParams] = useSearchParams();
  const highlightHotelId = searchParams.get("hotel") || null;

  return (
    <div className="landing-theme min-h-screen bg-[#FFFBF7] overflow-x-hidden">
      <SEO
        title="Sri Lanka Retreats on the Map"
        description="Browse every Raya LongLife Ayurveda and wellness retreat in Sri Lanka on an interactive map."
        url="/individual-stays/sri-lanka/map"
      />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-28 sm:pt-32 pb-20">
        <div className="mb-8">
          <h1
            className="text-[#5E17EB] mb-2 uppercase"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0.1em",
            }}
          >
            Sri Lanka
          </h1>
          <p
            className="text-3xl sm:text-4xl text-[#181818]"
            style={{ fontFamily: "Sentient, serif", fontStyle: "italic" }}
          >
            Every retreat, on the map
          </p>
          <p
            className="text-sm text-[#8C8C8C] mt-3 max-w-xl"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Pins show retreats with a confirmed location. Zoom in to separate
            clusters, and open a pin to jump straight to that retreat.
          </p>
        </div>

        <HotelsMapView highlightHotelId={highlightHotelId} />

        <div className="mt-8">
          <Link
            to="/individual-stays/sri-lanka"
            className="text-[#5E17EB] text-xs tracking-[0.16em] uppercase hover:underline"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            &larr; Back to all Sri Lanka stays
          </Link>
        </div>
      </div>
    </div>
  );
}
