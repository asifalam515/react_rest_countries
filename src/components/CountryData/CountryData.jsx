import React from "react";

const CountryData = ({ country }) => {
  return (
    <div>
      <h5>Country Data found: {country.name.common} </h5>
    </div>
  );
};

export default CountryData;
