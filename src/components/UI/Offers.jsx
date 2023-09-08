import PropTypes from 'prop-types';

const Offer = ({ imageURL, offerHeader, offerDetails, offerWidth, offerFlexGrow }) => {
  const offerContainerStyle = {
    width: offerWidth,
    flexGrow: offerFlexGrow,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };
  return (
    <div className="offer-container" style={offerContainerStyle}>
      <img src={imageURL} alt="" className="offer-image" />
      <span className="fw-bold fnt-25">{offerHeader}</span>
      <span>{offerDetails}</span>
    </div>
  );
};

Offer.propTypes = {
  imageURL: PropTypes.string,
  offerHeader: PropTypes.string,
  offerDetails: PropTypes.string,
  offerWidth: PropTypes.string,
  offerFlexGrow: PropTypes.number,
};

// set default values
Offer.defaultProps = {
  offerWidth: '100%',
  offerFlexGrow: 1,
};

export default Offer;
