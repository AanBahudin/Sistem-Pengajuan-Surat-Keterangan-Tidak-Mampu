import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LoaderCircle } from 'lucide-react';

const RTAndKelurahanMaps = ({koordinat=[]}) => {
  return (
    <div className="h-[70vh]  ">
    {koordinat ? (
      <MapContainer
        center={koordinat}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={koordinat} draggable={false}>
          <Popup>Lokasi Anda telah ditentukan</Popup>
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
  )
}

export default RTAndKelurahanMaps