import CountryData from "../CountryData/CountryData";

const CountryDetail = ({ country, handleVisitedCountry }) => {
  return (
    <div>
      <h3>Country Details</h3>
      <hr />
      <CountryData country={country}></CountryData>
    </div>
  );
};

export default CountryDetail;
