import PropTypes from 'prop-types';

const RadioInput = (props) => {
  return (
    <span className="d-flex align-items-center justify-content between ">
      <input type="radio" />
      <span>{props.text}</span>
    </span>
  );
};
RadioInput.propTypes = {
  text: PropTypes.string.isRequired,
};
export default RadioInput;
