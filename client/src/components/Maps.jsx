import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LoaderCircle } from 'lucide-react';

const Maps = ({ position, setPosition }) => {
  let mapRef = null; // Untuk merujuk ke instance MapContainer

  return (
    <div className="h-[80vh]">
      {position ? (
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          whenCreated={(mapInstance) => (mapRef = mapInstance)} // Simpan referensi map
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={position}
            draggable
            eventHandlers={{
              dragstart: () => {
                if (mapRef) mapRef.dragging.disable(); // Nonaktifkan drag peta saat marker digeser
              },
              dragend: (e) => {
                if (mapRef) mapRef.dragging.enable(); // Aktifkan kembali drag peta setelah marker selesai digeser
                const marker = e.target;
                const newPos = marker.getLatLng();
                setPosition([newPos.lat, newPos.lng]); // Perbarui posisi marker
              },
            }}
          >
            <Popup>Seret untuk menentukan lokasi rumah Anda</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="w-full h-[30vh] flex items-center justify-center">
          <p className="text-center flex animate-pulse items-center gap-x-4 text-2xl text-slate-700 font-semibold">
            <LoaderCircle className="animate-spin" />
            Mohon menunggu, sedang memuat peta ...
          </p>
        </div>
      )}
    </div>
  );
};

export default Maps;
