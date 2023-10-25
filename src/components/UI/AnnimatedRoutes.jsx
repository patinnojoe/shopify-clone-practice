import { Route, Routes } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import OnboardingScreen from '../OnboardingScreen';
import SignUp from '../SignUp';
import SignUpMethod from '../SignUpMethod';
import LogIn from '../Login';

import { AnimatePresence } from 'framer-motion';
import { Analytics, Content, Customers, Discounts, Home, Orders, Products } from '../admin';

function AnnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact Component={OnboardingScreen} />
        <Route path="/signup" exact Component={SignUp} />
        <Route path="/signup-method" exact Component={SignUpMethod}></Route>
        <Route path="/login" exact Component={LogIn}></Route>
        <Route path="/admin/" exact Component={Home}></Route>
        <Route path="/admin/orders" exact Component={Orders}></Route>
        <Route path="/admin/discounts" exact Component={Discounts}></Route>
        <Route path="/admin/products" exact Component={Products} />
        <Route path="/admin/customers" exact Component={Customers} />
        <Route path="/admin/content" exact Component={Content}></Route>
        <Route path="/admin/analytics" exact Component={Analytics} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnnimatedRoutes;
