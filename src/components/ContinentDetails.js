/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CountUp from 'countup';
import images from '../images/images';
import CountryList from './CountryList';

const ContinentDetails = () => {
  const { continentName } = useParams();
  const continentDetails = useSelector((state) => state.covid.continents.find((cont) => cont.continent === continentName));
  const countries = useSelector((state) => state.covid.countries.filter(
    (country) => country.continent === continentName,
  ));

  return (
    <>
      {continentDetails && (
        <>
          <div className="continentDetails">
            <img
              src={images[continentName]}
              alt="continent map"
              className="continentImage"
            />
            <div className="continentCount">
              <span className="continentName">
                {continentDetails.continent}
              </span>
              <CountUp
                delay={1}
                end={continentDetails.cases}
                separator=","
                prefix="Total Cases: "
                duration={3}
              />
              <CountUp
                delay={1}
                end={continentDetails.deaths}
                separator=","
                prefix="Total Deaths: "
                duration={3}
              />
            </div>
          </div>
          <CountryList countries={countries} />
        </>
      )}
    </>
  );
};

export default ContinentDetails;
