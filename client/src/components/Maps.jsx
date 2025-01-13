import React from 'react'
import LocationSelector from './LocationSelector';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppContext } from '../App';

const Maps = () => {
  const {position, setPosition} = useAppContext()
  
    
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
}

export default Maps