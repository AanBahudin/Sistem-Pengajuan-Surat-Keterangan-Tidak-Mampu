import React from 'react'
import { useMapEvents } from 'react-leaflet';
import { useUserDashboardContext } from '../pages/user/DashboardUser';


const LocationSelector = ({ }) => {

    const { setPosition } = useUserDashboardContext()

    // Mengizinkan interaksi dengan peta
      useMapEvents({
        click(e) {
          setPosition([e.latlng.lat, e.latlng.lng]); // Update posisi pin sesuai lokasi klik
        },
      });
    
      return null;
}

export default LocationSelector