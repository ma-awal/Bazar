import React, { useRef, useState } from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './store.css';

const Store = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    const location = event.target.elements.location.value;

    try {
      // Perform geocoding or map search operation using a service or API
      // Replace the following line with your geocoding or search logic
      const response = await fetch(
        `https://api.example.com/geocode?location=${location}`
      );
      const data = await response.json();

      // Get the latitude and longitude coordinates from the response data
      const { latitude, longitude } = data;

      // Update the map center to the searched location
      map.flyTo([latitude, longitude], 13);
    } catch (error) {
      console.error('Error occurred during search:', error);
    }
  };

  return (
    <section className="Store">
      <div className="container">
        <div className="row">
          <h2>Our store</h2>
          <div className="col-12 col-md-8 mx-auto">
            <form onSubmit={handleSearch} className=" mx-auto search_bar">
              <span>
                <BiCurrentLocation />
              </span>
              <input
                type="search"
                placeholder="Your location"
                id="location"
                name="location"
              />

              <button className=" bg-transparent" type="submit">
                <CiSearch className="fs-5 me-2" />
              </button>
            </form>
            <div
              ref={mapContainerRef}
              style={{ width: '100%', height: '400px' }}
            >
              <MapContainer
                center={[0, 0]}
                zoom={1}
                style={{ width: '100%', height: '100%' }}
                whenCreated={(mapInstance) => {
                  setMap(mapInstance);
                }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
