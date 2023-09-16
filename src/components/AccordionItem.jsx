import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import PropTypes from 'prop-types';

function AccordionItem({ question, answer, index }) {
  const [selected, setSelected] = useState(null);

  // faq button style
  const faqButtonStyle = {
    backgroundColor: selected === index ? 'black' : '#f3edede7',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2.5rem',
    height: '2.5rem',
    color: selected === index ? 'white' : 'black',
    fontSize: '16px',
    transition: '0.5s',
  };
  // state to check if accordion is clicked
  const toggleAccordion = (index) => {
    selected === index ? setSelected(null) : setSelected(index);
  };
  return (
    <section className="faq-container">
      <div className="d-flex flex-column gap-2">
        <header className="  accordion-header cursor-pointer" onClick={() => toggleAccordion(index)}>
          <h3 className="faq-question fw-bold">{question}</h3>
          <button className="plus-minus-container" style={faqButtonStyle}>
            {selected === index ? <FaMinus /> : <FaPlus />}
          </button>
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: answer }}
          className={selected === index ? 'accordion-content show' : 'accordion-content'}
        ></div>
      </div>
    </section>
  );
}

AccordionItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.node.isRequired,
  index: PropTypes.number,
};

export default AccordionItem;
