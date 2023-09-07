import PropTypes from 'prop-types';

const AnchorButton = ({ hrefLink, anchorText, isBlackBg, isWhiteText, width }) => {
  // set conditional styling
  const anchorBtnStyle = {
    backgroundColor: isBlackBg ? '#000' : '#fff',
    color: isWhiteText ? '#fff' : '#000',
    border: isBlackBg ? 'none' : '1px solid #000',
    borderRadius: '30px',
    fontSize: '18px',
    padding: '1rem',
    textDecoration: 'none',
    textAlign: 'center',
    width: width,
  };

  return (
    <a href={hrefLink} style={anchorBtnStyle}>
      {anchorText}
    </a>
  );
};

// setting prop validation
AnchorButton.propTypes = {
  hrefLink: PropTypes.string.isRequired,
  anchorText: PropTypes.string.isRequired,
  isBlackBg: PropTypes.bool,
  isWhiteText: PropTypes.bool,
  width: PropTypes.string,
};

// set default prop values
AnchorButton.defaultProps = {
  isBlackBg: false,
  isWhiteText: false,
};
export default AnchorButton;
