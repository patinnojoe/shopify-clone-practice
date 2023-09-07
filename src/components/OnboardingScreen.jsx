import { shopifyLogo } from '../assets';
import { AnchorButton, InputField } from './UI';

const OnboardingScreen = () => {
  return (
    <>
      <section className="onboarding-page-wrapper">
        <img src={shopifyLogo} alt="" className="logo" />
        <div className="hero-text d-flex flex-column gap-4">
          <div>
            <h1 className="text-center hero-header-text fw-bold fnt-40">Bring your ideas to life for $1/month</h1>
            <p className="text-center fnt-17">
              The future of business is yours to shape. Sign Up for a free tril and enjoy 3 months of Shopify for
              $1/month on select plans.
            </p>
          </div>
          <div className="d-flex flex-column gap-3 flex-md-row justify-content-center">
            <section className="start-trail-form d-none d-lg-flex d-md-flex">
              <InputField inputPlaceholder="Enter your email address" inputType="email" width="100%" />
              <div className="d-none d-lg-flex d-md-flex justify-content-end ">
                <AnchorButton
                  isBlackBg="true"
                  isWhiteText="true"
                  hrefLink="#"
                  anchorText="Start free trial"
                  width="10rem"
                />
              </div>
            </section>

            {/* dispaly only on small screen */}
            <div className="d-flex d-lg-none d-md-none gap-3 align-items-center flex-column">
              <InputField
                inputPlaceholder="Enter your email address"
                inputType="email"
                width="100%"
                isBorderTransparent={false}
              />
              <AnchorButton
                isBlackBg={true}
                isWhiteText={true}
                hrefLink="#"
                anchorText="Start free trial"
                width="100%"
              />
            </div>
          </div>
          <p className="fnt-12 text-center mt-1">
            Try Shopify free for 3 days, no credit card&nbsp;required. By entering your email, you agree to receive
            marketing emails&nbsp;from&nbsp;Shopify.
          </p>
          <section className="details-section">
            <img
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/free-trial/market-be57f30bfb32b297a04a00e2cf2f1adbaecfbde7a8816827f1d8f2a219727bea.svg"
              alt="Get started with shopify"
              className="get-started-img"
            />
          </section>
        </div>
      </section>
    </>
  );
};

export default OnboardingScreen;
