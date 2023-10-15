import { useState } from 'react';
import PropTypes from 'prop-types';

const RadioInput = (props) => {
  const { text, isSelected, onSelect } = props;

  const handleClick = () => {
    onSelect(text);
  };
  const inputBoxClass = isSelected ? 'ui-input-box radio-input active col-lg-6' : 'ui-input-box radio-input';

  return (
    <div className="col-lg-6">
      <span className={inputBoxClass} onClick={handleClick}>
        <div className="p-3">
          <label className="custom-radio" htmlFor={`radio-${text}`}>
            <input type="radio" checked={isSelected} className="radio-input " readOnly id={`radio-${text}`} />
            <span>{text}</span>
          </label>
        </div>
      </span>
    </div>
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
    <div className="row g-3custom ">
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
