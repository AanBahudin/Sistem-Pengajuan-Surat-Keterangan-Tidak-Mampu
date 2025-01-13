import React from 'react'
import LocationSelector from './LocationSelector';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppContext } from '../App';
import { LoaderCircle } from 'lucide-react';

const Maps = ({ isDraggable=true }) => {
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
        <div className='w-full h-[30vh] flex items-center justify-center'>
          <p className='text-center flex animate-pulse items-center gap-x-4 text-2xl text-slate-700 font-semibold'>
            <LoaderCircle className='animate-spin ' />
            Mohon menunggu, sedang memuat peta ...
          </p>
        </div>
      )}
    </div>
    );
}

export default Maps