"use client"

import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function Map() {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: -34.397,
    lng: 150.644
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDU91En0tc2uXnIN5jhIP0Y-DmBelmhQn0">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        center={defaultCenter}
      />
    </LoadScript>
  );
}

export default Map;
