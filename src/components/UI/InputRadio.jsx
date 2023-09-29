import { useState } from 'react';
import PropTypes from 'prop-types';

const RadioInput = (props) => {
  const { text, isSelected, onSelect } = props;

  const handleClick = () => {
    onSelect(text);
  };
  const inputBoxClass = isSelected ? 'ui-input-box radio-input active' : 'ui-input-box radio-input';

  return (
    <span className={inputBoxClass} onClick={handleClick}>
      <label htmlFor="" className="custom-radio">
        <input type="radio" checked={isSelected} className="radio-input " readOnly />
        <span>{text}</span>
      </label>
    </span>
  );
};
RadioInput.propTypes = {
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const RadioGroup = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (text) => {
    setSelectedOption(text);
  };

  return (
    <div className="radio-input-container">
      <RadioInput
        text="I'm just starting"
        isSelected={selectedOption === "I'm just starting"}
        onSelect={handleOptionSelect}
      />
      <RadioInput
        text="I'm already selling online"
        isSelected={selectedOption === "I'm already selling online"}
        onSelect={handleOptionSelect}
      />
    </div>
  );
};

export default RadioGroup;
