import React from "react";
import LocationMap from "react-location-picker";

const MapLocation = ({
  // eslint-disable-next-line react/prop-types
  setAddress, setCoordinates, mapAddress, coordinates
}) => {
  const handleLocationChange = (loc) => {
    const { position, address } = loc;
    setCoordinates(position);
    setAddress(address);
  };

  return (
    <div className="mb-2">
      <h5>{mapAddress}</h5>
      <LocationMap
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={ <div style={{ height: "200px" }} />}
        defaultPosition={coordinates}
        onChange={handleLocationChange} />
    </div>
  );
};

export default MapLocation;
