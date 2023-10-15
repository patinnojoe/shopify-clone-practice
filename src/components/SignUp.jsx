// import Form from './Form';
import { motion } from 'framer-motion';
import { InputCheckbox, ProductCheckbox, RadioGroup } from './UI';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import axios from 'axios';
import { useEffect } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

const SignUp = () => {
  useEffect(() => {
    document.title = 'Create - Shopify';
  }, []);

  // const history = useHistory();

  const questions = [QuestionOne, QuestionTwo, QuestionThree, SelectCountry];

  // set state
  const [currentStep, setCurrentStep] = useState(0);

  // set function for skip all, skip, next and back
  const nextStep = () => {
    if (currentStep < questions.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const skipAll = () => {
    setCurrentStep(questions.length - 1);
  };

  const backStep = () => {
    if (currentStep < questions.length) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const renderCurrentQuestion = () => {
    const CurrentQuestionComponent = questions[currentStep];
    return <CurrentQuestionComponent />;
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%', transition: { duration: 0.3, ease: 'easeIn' } }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      className="ui-form-container"
    >
      <form className="ui-form">
        <section className="d-flex flex-column flex-grow-1">
          {/* form body */}
          <div className="flex-grow-1">
            {/* progress bar */}
            <div className="d-flex flex-column gap-3 py-5 progressbar-container">
              <Link to="/" className="cursor-pointer">
                <svg fill="none" role="img" viewBox="0 0 225 64" height="30">
                  <g>
                    <path
                      d="M77.8396 35.5887C75.9238 34.5346 74.9155 33.6813 74.9155 32.4766C74.9155 30.9205 76.2767 29.9668 78.4446 29.9668C80.9653 29.9668 83.1835 31.0209 83.1835 31.0209L84.948 25.6499C84.948 25.6499 83.3348 24.395 78.5454 24.395C71.8907 24.395 67.2525 28.2099 67.2525 33.5307C67.2525 36.5425 69.4204 38.8515 72.294 40.508C74.6131 41.8131 75.4197 42.7668 75.4197 44.1221C75.4197 45.5778 74.2602 46.7323 72.0923 46.7323C68.8658 46.7323 65.8409 45.0758 65.8409 45.0758L63.9756 50.4468C63.9756 50.4468 66.7988 52.304 71.4874 52.304C78.3437 52.304 83.2339 48.9409 83.2339 42.9174C83.3348 39.6044 80.814 37.2954 77.8396 35.5887Z"
                      fill="black"
                    ></path>
                    <path
                      d="M105.165 24.2946C101.787 24.2946 99.1654 25.9009 97.0984 28.3103L96.9976 28.2601L99.9216 13.0005H92.2586L84.8477 51.8021H92.4602L94.981 38.5503C95.9893 33.5307 98.5604 30.4687 100.98 30.4687C102.694 30.4687 103.35 31.6232 103.35 33.2797C103.35 34.3338 103.249 35.5887 102.997 36.6428L100.123 51.8523H107.736L110.71 36.1911C111.063 34.5346 111.265 32.577 111.265 31.2217C111.366 26.8546 109.147 24.2946 105.165 24.2946Z"
                      fill="black"
                    ></path>
                    <path
                      d="M128.607 24.2944C119.431 24.2944 113.331 32.5266 113.331 41.7125C113.331 47.5854 116.961 52.354 123.817 52.354C132.841 52.354 138.891 44.3227 138.891 34.936C138.942 29.4646 135.766 24.2944 128.607 24.2944ZM124.876 46.4811C122.254 46.4811 121.196 44.2725 121.196 41.5117C121.196 37.1446 123.464 30.067 127.598 30.067C130.321 30.067 131.178 32.376 131.178 34.6348C131.178 39.3533 128.909 46.4811 124.876 46.4811Z"
                      fill="black"
                    ></path>
                    <path
                      d="M158.452 24.2944C153.31 24.2944 150.386 28.8121 150.386 28.8121H150.285L150.739 24.7462H143.983C143.63 27.507 143.025 31.6733 142.42 34.8356L137.127 62.5438H144.74L146.857 51.2999H147.008C147.008 51.2999 148.571 52.3038 151.495 52.3038C160.469 52.3038 166.317 43.1682 166.317 33.9321C166.317 28.8623 164.048 24.2944 158.452 24.2944ZM151.193 46.6317C149.226 46.6317 148.067 45.5274 148.067 45.5274L149.327 38.4497C150.235 33.7313 152.705 30.5689 155.327 30.5689C157.646 30.5689 158.351 32.7274 158.351 34.7352C158.351 39.6042 155.427 46.6317 151.193 46.6317Z"
                      fill="black"
                    ></path>
                    <path
                      d="M177.206 13.4019C174.786 13.4019 172.82 15.3093 172.82 17.8191C172.82 20.0779 174.232 21.634 176.4 21.634H176.501C178.87 21.634 180.937 20.0277 180.987 17.2168C181.038 14.9579 179.525 13.4019 177.206 13.4019Z"
                      fill="black"
                    ></path>
                    <path d="M166.519 51.8021H174.182L179.374 24.897H171.661L166.519 51.8021Z" fill="black"></path>
                    <path
                      d="M198.734 24.8468H193.44L193.692 23.5919C194.146 20.9817 195.658 18.6727 198.23 18.6727C199.591 18.6727 200.649 19.0742 200.649 19.0742L202.162 13.1511C202.162 13.1511 200.851 12.4985 198.028 12.4985C195.306 12.4985 192.634 13.2515 190.567 15.0083C187.945 17.217 186.735 20.3793 186.13 23.5919L185.928 24.8468H182.399L181.29 30.5691H184.819L180.786 51.8021H188.399L192.432 30.5691H197.675L198.734 24.8468Z"
                      fill="black"
                    ></path>
                    <path
                      d="M217.084 24.897C217.084 24.897 212.295 36.8436 210.178 43.3691H210.077C209.926 41.2609 208.212 24.897 208.212 24.897H200.196L204.783 49.5934C204.884 50.1456 204.834 50.497 204.632 50.8483C203.725 52.555 202.263 54.2115 200.498 55.4162C199.087 56.4703 197.473 57.1229 196.213 57.5746L198.33 63.9997C199.893 63.6483 203.069 62.3934 205.792 59.8836C209.27 56.6209 212.497 51.6515 215.774 44.8248L225.1 24.897H217.084Z"
                      fill="black"
                    ></path>
                    <path
                      d="M48.33 12.1452C48.285 11.8315 48.015 11.6522 47.79 11.6522C47.565 11.6522 43.11 11.5626 43.11 11.5626C43.11 11.5626 39.375 7.97718 39.015 7.57382C38.655 7.21527 37.935 7.30491 37.665 7.39454C37.665 7.39454 36.945 7.61863 35.775 7.97718C35.595 7.34973 35.28 6.58782 34.875 5.7811C33.57 3.27129 31.59 1.92676 29.25 1.92676C29.07 1.92676 28.935 1.92676 28.755 1.97157C28.665 1.88194 28.62 1.7923 28.53 1.74749C27.495 0.671855 26.19 0.13404 24.615 0.178858C21.6 0.268494 18.585 2.46457 16.11 6.31891C14.4 9.05281 13.095 12.459 12.69 15.1032C9.225 16.1789 6.795 16.9408 6.705 16.9408C4.95 17.4786 4.905 17.5234 4.68 19.1817C4.59 20.4366 0 55.7979 0 55.7979L38.52 62.431L55.215 58.3077C55.17 58.3077 48.375 12.459 48.33 12.1452ZM33.84 8.60463C32.94 8.87354 31.95 9.18726 30.87 9.5458C30.87 8.02199 30.645 5.87073 29.97 4.07802C32.265 4.43656 33.39 7.036 33.84 8.60463ZM28.845 10.1284C26.82 10.7559 24.615 11.4282 22.41 12.1004C23.04 9.72508 24.21 7.39454 25.65 5.82592C26.19 5.24328 26.955 4.61583 27.81 4.25729C28.71 6.00519 28.89 8.47017 28.845 10.1284ZM24.705 2.19566C25.425 2.19566 26.01 2.33012 26.505 2.68866C25.695 3.09202 24.885 3.71947 24.165 4.5262C22.23 6.58782 20.745 9.76989 20.16 12.8623C18.315 13.445 16.515 13.9828 14.895 14.4758C15.975 9.59062 20.07 2.33012 24.705 2.19566Z"
                      fill="#95BF47"
                    ></path>
                    <path
                      d="M47.7895 11.6526C47.5645 11.6526 43.1095 11.563 43.1095 11.563C43.1095 11.563 39.3745 7.97755 39.0145 7.57419C38.8795 7.43973 38.6995 7.3501 38.5195 7.3501V62.4313L55.2145 58.3081C55.2145 58.3081 48.4195 12.4593 48.3745 12.1456C48.2845 11.8319 48.0145 11.6526 47.7895 11.6526Z"
                      fill="#5E8E3E"
                    ></path>
                    <path
                      d="M29.2498 20.2129L27.3148 27.4286C27.3148 27.4286 25.1548 26.4426 22.5898 26.6218C18.8098 26.8459 18.8098 29.2213 18.8098 29.8039C19.0348 33.0308 27.5398 33.7479 28.0348 41.3221C28.3948 47.2829 24.8848 51.3613 19.7548 51.6751C13.6348 51.9888 10.2598 48.4034 10.2598 48.4034L11.5648 42.8907C11.5648 42.8907 14.9848 45.4454 17.6848 45.2661C19.4398 45.1765 20.1148 43.6975 20.0248 42.7115C19.7548 38.4986 12.8248 38.7675 12.3748 31.8207C12.0148 25.9944 15.8398 20.1232 24.2998 19.5854C27.5848 19.3613 29.2498 20.2129 29.2498 20.2129Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_198_267">
                      <rect width="225" height="64" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              {currentStep < questions.length - 1 && (
                <ProgressBar
                  variant="info"
                  now={currentStep === questions.length - 1 ? 100 : (currentStep / (questions.length - 1)) * 100}
                  max={100}
                />
              )}
            </div>
            {/* render question here */}
            {renderCurrentQuestion()}
          </div>

          {/* form footer */}
          <div className="form-footer">
            {currentStep > 0 && (
              <span className="form-text" onClick={backStep}>
                <GoChevronLeft />
                Back
              </span>
            )}
            <div className="d-flex gap-2 align-items-center">
              {currentStep < questions.length - 1 && (
                <span className="form-text" onClick={skipAll}>
                  Skip All
                </span>
              )}
              {currentStep < questions.length - 1 && (
                <span className="form-text" onClick={nextStep}>
                  Skip
                </span>
              )}

              {currentStep < questions.length - 1 ? (
                <span className="form-next form-text" onClick={nextStep}>
                  Next
                </span>
              ) : (
                <Link to="/signup-method" className="form-next form-text">
                  Next
                </Link>
              )}
            </div>
          </div>
        </section>
      </form>
    </motion.div>
  );
};

export function QuestionOne() {
  return (
    <div className="form-option">
      <div className="d-flex flex-column gap-2 mb-2">
        <p className="fnt-18 fw-bold">Let &apos;s get started. Which of these best describes you?</p>
        <small className="fnt-14">We &apos;ll help you get set up based on your business needs.</small>
      </div>
      <RadioGroup />
    </div>
  );
}
export function QuestionTwo() {
  return (
    <div className="form-option">
      <div className="d-flex flex-column gap-2 mb-2">
        <p className="fnt-18 fw-bold">Where would you like to sell?</p>
        <small className="fnt-14">
          Pick as many as you like – you can always change these later. We&apos;ll make sure you&apos; re set up to sell
          in these places.
        </small>

        <InputCheckbox />
      </div>
    </div>
  );
}

export function QuestionThree() {
  return (
    <div className="form-option">
      <div className="d-flex flex-column gap-2 mb-2">
        <p className="fnt-18 fw-bold">What do you plan to sell first?</p>
        <small className="fnt-14">Pick what you want to start with. We’ll help you stock your store.</small>

        <ProductCheckbox />
      </div>
    </div>
  );
}

// access country API
export function SelectCountry() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // Fetch data from the REST Countries API
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Transform country data into options for react-select
  const countryOptions = countries.map((country) => ({
    value: country.name.common,
    label: (
      <div>
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          style={{ marginRight: '8px', width: '20px' }}
        />
        {country.name.common}
      </div>
    ),
  }));

  // Find the option object that corresponds to 'Nigeria' and set it as the default value
  const defaultCountryOption = countryOptions.find((option) => option.value === 'Nigeria');

  // Handle the change event when a user selects a country
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div className="countrySelect">
      <section className="d-flex flex-column gap-2 mb-4">
        <p className="fw-bold fnt-27">Where will your business be located?</p>
        <span className="fnt-14">
          We’ll use your location to set up your default shipping rates, recommended apps, and more.
        </span>
      </section>
      <section className="d-flex flex-column">
        <label htmlFor="">country/region</label>
        <Select
          options={countryOptions}
          placeholder="Select a country"
          value={selectedCountry || defaultCountryOption} // Use selectedCountry as the value
          onChange={handleCountryChange}
        />
      </section>
    </div>
  );
}

export default SignUp;
