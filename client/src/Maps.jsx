import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { handleToast } from './components/CustomToast';

// Mengatur ikon default Marker (karena Leaflet tidak memuat ikon secara otomatis di React)
const defaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const LocationSelector = ({ position, setPosition }) => {
  // Mengizinkan interaksi dengan peta
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]); // Update posisi pin sesuai lokasi klik
    },
  });

  return null;
};

const UserLocationMap = () => {
  const [position, setPosition] = useState(null); // Lokasi pin
  const [address, setAddress] = useState(''); // Lokasi sebagai alamat (opsional)

  useEffect(() => {
    // Mendapatkan lokasi pengguna secara otomatis
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
        },
        (err) => {
          console.error('Geolocation error:', err.message);
          setPosition([51.505, -0.09]); // Lokasi default jika gagal
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setPosition([51.505, -0.09]); // Lokasi default jika tidak didukung
    }
  }, []);

  const handleFormSubmit = () => {
    console.log('Pengajuan Lokasi:', position, address);
    alert(`Lokasi berhasil disimpan: ${position}`);
  };

  return (
    <div className='h-[80vh]'  >
    {position ? (
      <>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={position}
            draggable // Membuat pin dapat diseret
            eventHandlers={{
              dragend: (e) => {
                const marker = e.target;
                const newPos = marker.getLatLng();
                setPosition([newPos.lat, newPos.lng]);
              },
            }}
          >
            <Popup>Seret atau klik pada peta untuk menentukan lokasi rumah Anda</Popup>
          </Marker>
          <LocationSelector position={position} setPosition={setPosition} />
        </MapContainer>
      </>
    ) : (
      <p>Loading map...</p>
    )}
  </div>
  );
};

export default UserLocationMap;
