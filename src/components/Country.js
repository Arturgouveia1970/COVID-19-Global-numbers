/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Country = ({
  country: {
    country,
    cases,
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
        backgroundImage: `linear-gradient(to bottom, #4286f4, ${bgColor(
          'aa',
        )}  40%, ${bgColor('cc')} 65%, ${bgColor()} 80%), url(${flag})`,
        backgroundSize: '33% 98%',
      }}
    >
      <div className="countryCount">
        <h4 className="countryHeader">
          <span className="countryTitle">{country}</span>
        </h4>
        <span className="countryFigures">{cases.toLowerCase()}</span>
        <span className="countryTestCases">cases</span>
      </div>
    </div>
  );
};

Country.prototypes = {
  country: PropTypes.shape({
    country: PropTypes.string.isRequired,
    cases: PropTypes.number.isRequired,
    countryInfo: PropTypes.shape({
      flag: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Country;
