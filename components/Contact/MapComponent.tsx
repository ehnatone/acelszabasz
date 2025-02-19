"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

interface MapProps {
  center: { lat: number; lng: number };
  zoom: number;
}

const MapComponent: React.FC<MapProps> = ({ center, zoom }) => {
  console.log(process.env.GOOGLE_MAPS_API_KEY as string);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="h-full w-full">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={zoom}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
