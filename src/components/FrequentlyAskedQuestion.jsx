import { frequentlyAskedQuestions } from '../constants';
import AccordionItem from './AccordionItem';

function FrequentlyAskedQuestion() {
  return (
    <div className="frequently-asked-question-wrapper">
      <h2 className="fw-bold faq-header clr-black">FAQ</h2>

      {/* frequently asked question map  */}
      {frequentlyAskedQuestions.map((faq, index) => {
        return <AccordionItem answer={faq.answer} question={faq.question} index={faq.index} key={index} />;
      })}
    </div>
  );
}

export default FrequentlyAskedQuestion;
