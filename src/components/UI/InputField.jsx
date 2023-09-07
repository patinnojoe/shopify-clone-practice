import PropTypes from 'prop-types';

const InputField = ({ inputType, inputPlaceholder, isBgTransparent, width, isBorderTransparent }) => {
  // set conditional styling
  const inputFieldStyle = {
    backgroundColor: isBgTransparent ? 'transparent' : '#fff',
    border: isBorderTransparent ? 'none' : '1px solid #000',
    padding: '1rem',
    borderRadius: '30px',
    width: width,
  };
  return <input type={inputType} placeholder={inputPlaceholder} style={inputFieldStyle} />;
};

// set prop validation
InputField.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  isBgTransparent: PropTypes.bool,
  width: PropTypes.string,
  isBorderTransparent: PropTypes.bool,
};

// set default prop value
InputField.defaultProps = {
  isBgTransparent: true,
  inputType: 'text',
  isBorderTransparent: true,
};

export default InputField;
