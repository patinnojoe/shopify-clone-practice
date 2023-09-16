import PropTypes from 'prop-types';

const AnchorButton = ({
  hrefLink,
  anchorText,
  isBlackBg,
  isWhiteText,
  width,
  height,
  padding,
  fontSize,
  displayType,
}) => {
  // set conditional styling
  const anchorBtnStyle = {
    backgroundColor: isBlackBg ? '#000' : '#fff',
    color: isWhiteText ? '#fff' : '#000',
    border: isBlackBg ? 'none' : '1px solid #000',
    borderRadius: '30px',
    textDecoration: 'none',
    textAlign: 'center',
    width: width,
    height: height,
    padding: padding,
    fontSize: fontSize,
    display: displayType,
    alignItems: 'center',
    justifyContent: 'center',
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
  height: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  displayType: PropTypes.string,
};

// set default prop values
AnchorButton.defaultProps = {
  isBlackBg: false,
  isWhiteText: false,
  fontSize: '18px',
  padding: '1rem',
};
export default AnchorButton;
