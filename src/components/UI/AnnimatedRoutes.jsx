import { Route, Routes } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import OnboardingScreen from '../OnboardingScreen';
import SignUp from '../SignUp';

import { AnimatePresence } from 'framer-motion';

function AnnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact Component={OnboardingScreen} />
        <Route path="/signup" exact Component={SignUp} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnnimatedRoutes;
