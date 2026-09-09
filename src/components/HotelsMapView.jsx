import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import { fetchWellnessHotels } from "../lib/wellnessApi";
import { cn } from "../lib/utils";

// Simple "browse every hotel on a map" view. This deliberately ignores any
// active search / advanced-filter state on the host page — it does its own
// lightweight fetch of the full hotel list and plots every hotel that has
// real coordinates. Hotels with null lat/lng are skipped silently.
//
// Optional `highlightHotelId` deep-link support: when supplied and that hotel
// has valid coordinates, the map opens centred/zoomed on it, its marker is
// drawn in brand purple (outside the cluster group so it never merges into a
// bubble), and its popup opens automatically. A bad / coordinate-less id is
// ignored — the map falls back to the default country-wide view.

const SRI_LANKA_CENTER = [7.8731, 80.7718];
const DEFAULT_ZOOM = 8;
const HIGHLIGHT_ZOOM = 13;

// Brand-purple pin for the highlighted hotel. A divIcon keeps this dependency-
// free and gives exact colour control; Leaflet's default markers stay blue.
const HIGHLIGHT_ICON = L.divIcon({
  className: "hotels-map__highlight-pin",
  html: `
    <svg width="34" height="46" viewBox="0 0 34 46" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 0C7.611 0 0 7.611 0 17c0 12.02 15.148 27.606 15.793 28.264a1.68 1.68 0 0 0 2.414 0C18.852 44.606 34 29.02 34 17 34 7.611 26.389 0 17 0Z" fill="#5E17EB"/>
      <circle cx="17" cy="17" r="6.25" fill="#ffffff"/>
    </svg>`,
  iconSize: [34, 46],
  iconAnchor: [17, 46],
  popupAnchor: [0, -42],
});

function toCoord(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

// Mirrors the primary-image logic used on the individual-stay list pages so
// popup thumbnails match the cards.
function getPrimaryImage(images) {
  if (!images) return null;
  if (typeof images === "string") return images || null;
  if (Array.isArray(images) && images.length > 0) {
    const sorted = [...images].sort(
      (a, b) => (b?.is_primary ? 1 : 0) - (a?.is_primary ? 1 : 0)
    );
    const first = sorted[0];
    return (typeof first === "string" ? first : first?.url) || null;
  }
  return images?.url || null;
}

function HotelPopup({ hotel }) {
  const image = getPrimaryImage(hotel.images);
  return (
    <Popup>
      <div className="min-w-[180px]">
        {image && (
          <img
            src={image}
            alt={hotel.name}
            className="w-full h-24 object-cover rounded mb-2"
          />
        )}
        <p
          className="text-sm text-[#181818] leading-snug"
          style={{ fontFamily: "Sentient, serif", fontStyle: "italic" }}
        >
          {hotel.name}
        </p>
        {hotel.location && (
          <p
            className="text-xs text-[#8C8C8C] mt-0.5 mb-2"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            {hotel.location}
          </p>
        )}
        <Link
          to={`/book-hotel/${hotel.id}`}
          className="text-[#5E17EB] text-xs uppercase tracking-[0.08em] hover:underline"
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          View retreat →
        </Link>
      </div>
    </Popup>
  );
}

// Highlighted marker: rendered outside the cluster group and opens its popup
// once, just after mount (react-leaflet v4 exposes the Leaflet marker on ref).
function HighlightMarker({ hotel }) {
  const markerRef = useRef(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      markerRef.current?.openPopup();
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Marker
      ref={markerRef}
      position={[hotel.lat, hotel.lng]}
      icon={HIGHLIGHT_ICON}
      zIndexOffset={1000}
    >
      <HotelPopup hotel={hotel} />
    </Marker>
  );
}

function Shell({ className, children }) {
  return (
    <div
      className={cn(
        "w-full rounded-xl border border-dashed border-[#D5CFC9] bg-[#FFF8F2] flex flex-col items-center justify-center gap-3 px-8 text-center h-[320px] sm:h-[520px] lg:h-[560px]",
        className
      )}
    >
      {children}
    </div>
  );
}

export default function HotelsMapView({ className = "", highlightHotelId = null }) {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    // No filter params — we want every hotel, regardless of the page's search.
    fetchWellnessHotels({ limit: 200 })
      .then((res) => {
        if (!cancelled) setHotels(res.data ?? []);
      })
      .catch((e) => {
        if (!cancelled) setError(e.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const points = useMemo(() => {
    return hotels
      .map((hotel) => {
        const lat = toCoord(hotel.latitude);
        const lng = toCoord(hotel.longitude);
        if (lat === null || lng === null) return null;
        return { ...hotel, lat, lng };
      })
      .filter(Boolean);
  }, [hotels]);

  // The deep-link target, only if it actually resolved to a hotel with coords.
  const highlightPoint = useMemo(() => {
    if (!highlightHotelId) return null;
    return (
      points.find((p) => String(p.id) === String(highlightHotelId)) ?? null
    );
  }, [points, highlightHotelId]);

  const clusteredPoints = useMemo(() => {
    if (!highlightPoint) return points;
    return points.filter((p) => p.id !== highlightPoint.id);
  }, [points, highlightPoint]);

  if (loading) {
    return (
      <Shell className={className}>
        <span
          className="inline-block w-7 h-7 rounded-full border-2 border-[#E0D4C8] border-t-[#5E17EB] animate-spin"
          aria-hidden="true"
        />
        <p
          className="text-sm text-[#8C8C8C]"
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          Loading map…
        </p>
      </Shell>
    );
  }

  if (error) {
    return (
      <Shell className={className}>
        <p
          className="text-sm text-[#8C8C8C]"
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          The map couldn't be loaded right now. Please try again in a moment.
        </p>
      </Shell>
    );
  }

  if (points.length === 0) {
    return (
      <Shell className={className}>
        <p
          className="text-base text-[#181818]"
          style={{ fontFamily: "Sentient, serif", fontStyle: "italic" }}
        >
          Map view coming soon
        </p>
        <p
          className="text-sm text-[#8C8C8C] max-w-sm"
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          We're adding precise locations for our retreats. Check back shortly, or
          browse the list below in the meantime.
        </p>
      </Shell>
    );
  }

  const initialCenter = highlightPoint
    ? [highlightPoint.lat, highlightPoint.lng]
    : SRI_LANKA_CENTER;
  const initialZoom = highlightPoint ? HIGHLIGHT_ZOOM : DEFAULT_ZOOM;

  return (
    <div
      className={cn(
        "w-full rounded-xl overflow-hidden shadow-sm border border-[#F0EBE4] h-[320px] sm:h-[520px] lg:h-[560px]",
        className
      )}
    >
      <MapContainer
        key={highlightPoint ? highlightPoint.id : "all"}
        center={initialCenter}
        zoom={initialZoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerClusterGroup chunkedLoading>
          {clusteredPoints.map((hotel) => (
            <Marker key={hotel.id} position={[hotel.lat, hotel.lng]}>
              <HotelPopup hotel={hotel} />
            </Marker>
          ))}
        </MarkerClusterGroup>
        {highlightPoint && <HighlightMarker hotel={highlightPoint} />}
      </MapContainer>
    </div>
  );
}
