import PropTypes from 'prop-types';

const Country = ({
  country: {
    country,
    cases,
    deaths,
    countryInfo: { flag },
  },
  index,
}) => {
  const bgColor = (fade = 'ff') => `#${
    (index + 1) % 4 === 2 || (index + 1) % 4 === 3 ? '373b44' : '4286f4'
  }${fade}`;
  return (
    <div
      data-testid="countryItem"
      className="countryDetails"
      style={{
        backgroundImage: `linear-gradient(to right, #4286f4, ${bgColor(
          'aa',
        )}  40%, ${bgColor('cc')} 65%, ${bgColor()} 80%), url(${flag})`,
        backgroundSize: '25% 98%',
      }}
    >
      <div className="countryCount container">
        <h4 className="countryHeader item item--1">
          <span className="countryTitle">{country}</span>
        </h4>
        <span className="countryTestCases item item--2">Cases</span>
        <span className="countryDeaths item item--3">Deaths</span>
        <span className="item item--4">Total</span>
        <span className="countryFigures item irem--5">{cases.toLocaleString()}</span>
        <span className="countryDeathFigures item item--6">{deaths.toLocaleString()}</span>
      </div>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string.isRequired,
    cases: PropTypes.number.isRequired,
    deaths: PropTypes.number.isRequired,
    countryInfo: PropTypes.shape({
      flag: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Country;
