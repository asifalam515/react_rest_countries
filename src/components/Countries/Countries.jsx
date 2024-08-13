import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountry = (country) => {
    setVisitedCountries([...visitedCountries, country]);
  };
  const [removeCountries, setRemoveCountries] = useState([]);
  //   remove item from an array in state
  // use filter to select all the elements except the one you want to remove
  const handleRemove = (country) => {
    console.log(country);
  };
  return (
    <div>
      <div>
        <h1>Countries Found :{countries.length}</h1>
        <ul>
          {visitedCountries.map((visitedList) => (
            <li key={visitedList.cca3}>
              {visitedList.name.common}{" "}
              <button onClick={() => handleRemove(visitedList)}>remove </button>{" "}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mx-5">
        {countries.map((country) => (
          <Country
            handleVisitedCountry={handleVisitedCountry}
            key={country.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
