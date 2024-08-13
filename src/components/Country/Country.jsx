import { useState } from "react";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountry }) => {
  const { name, capital, region, flags, population } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div>
      {/* single card */}
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={flags.png} alt="Flags" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl"> {name?.common}</h2>
          <p>Population is : {population} </p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-success"
              onClick={() => handleVisitedCountry(country)}
            >
              Mark Visited
            </button>

            <button className="btn btn-primary" onClick={handleVisited}>
              {visited ? "visited" : "going"}
            </button>
            {visited ? "I have visited this country" : "I will visit"}
          </div>
          <hr />
        </div>
        <CountryDetail
          country={country}
          handleVisitedCountry={handleVisitedCountry}
        ></CountryDetail>
      </div>
    </div>
  );
};

export default Country;
