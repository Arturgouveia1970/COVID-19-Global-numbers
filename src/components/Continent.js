/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
const Continent = ({ continent: { continent, cases } }) => (
  <Link
    to={`/${continent}`}
    data-testid="continentItem"
    className="continentElement"
  >
    <BsArrowRightCircle size={30} className="arrowButton" />
    <img
      src={images[continent]}
      alt="continent map"
      className="continentImage"
    />
    <div className="continentText">
      <h4 className="continentName">
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <span className="">{`${continent}`}</span>
        // eslint-disable-next-line react/jsx-no-comment-textnodes
      </h4>
      // eslint-disable-next-line react/prop-types
      <span className="">{cases.toLocalString()}</span>
    </div>
  </Link>
);

Continent.prototypes = {
  continent: PropTypes.shape({
    continent: PropTypes.string.isRequired,
    cases: PropTypes.number.isRequired,
  }).isRequired,
};

export default Continent;
