import Form from './Form';
import { motion } from 'framer-motion';
import { RadioGroup } from './UI';
const SignUp = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Form>
        <p className="fnt-18 fw-bold">Let’s get started. Which of these best describes you?</p>
        <small className="fnt-14">We’ll help you get set up based on your business needs.</small>

        <RadioGroup />
      </Form>
    </motion.div>
  );
};

export default SignUp;
