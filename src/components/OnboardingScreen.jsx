import { shopifyLogo } from '../assets';
import Faq from './FrequentlyAskedQuestion';
import FrontUsers from './FrontUsers';
import { AnchorButton, InputField, Offer } from './UI';

const OnboardingScreen = () => {
  return (
    <>
      <section className="onboarding-page-wrapper">
        <img src={shopifyLogo} alt="" className="logo" />
        <div className="hero-text d-flex flex-column gap-4">
          <div>
            <h1 className="text-center hero-header-text fw-bold">
              Bring your ideas to life
              <br /> for $1/month
            </h1>
            <p className="text-center fnt-17">
              The future of business is yours to shape. Sign Up for a free tril and enjoy 3 months of Shopify for
              $1/month on select plans.
            </p>
          </div>
          <div className="d-flex flex-column gap-3 flex-md-row justify-content-center">
            {/* display only on desktop */}
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
            <br />
            marketing emails&nbsp;from&nbsp;Shopify.
          </p>
          {/* details */}
          <section className="details-section">
            <img
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/free-trial/market-be57f30bfb32b297a04a00e2cf2f1adbaecfbde7a8816827f1d8f2a219727bea.svg"
              alt="Get started with shopify"
              className="get-started-img"
            />

            {/* offers */}
            <div className="d-flex flex-column flex-md-row gap-5 align-items-center mt-5">
              <Offer
                imageURL="https://cdn.shopify.com/shopifycloud/brochure/assets/free-trial/icons/template2-b5046e879e5b48d1cd95d1bdb18920d52309a1a17ce8255d3b5d9c295f69236c.svg"
                offerHeader="Customizable templates"
                offerDetails="Free website designs to launch your store quickly and easily."
              />

              <Offer
                imageURL="https://cdn.shopify.com/shopifycloud/brochure/assets/free-trial/icons/box2-effe369359f293039eecbac0bf07622de2435381bdfb36be0b54fc918bd6398f.svg"
                offerHeader="All in One"
                offerDetails="Shopify takes care of everything from marketing and payments to secure transactions and shipping."
              />

              <Offer
                imageURL="https://cdn.shopify.com/shopifycloud/brochure/assets/free-trial/icons/lock2-d8b10d2f1f364887c8d4cfdedadaf151a9f2f4a775fbb03f6e05cd74a031675c.svg"
                offerHeader="A safe and efficient platform"
                offerDetails="Millions of users trust Shopify to manage their online stores."
              />
            </div>

            {/* front page users */}
            <FrontUsers />

            {/* CEOS quote */}
            <aside className="d-flex flex-column gap-3 justify-content-center align-items-center quote-container">
              <h4 className="fw-bold fnt-35 text-center ceo-quote">
                &quot;Shopify is better than any other platform we&apos;ve
                <br /> played with, and we &apos;ve played with them all.&quot;
              </h4>
              <small className="fnt-18">Jonathon Bayme, CEO of Theory11</small>
            </aside>
          </section>

          {/* call to action section */}
          <div className="subscribe-to-shopify-container w-100 mt-4">
            <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
              <h4 className="fnt-30 clr-white fw-bold text-center subscribe-text">
                Build your dream business for $1/month
              </h4>
              <p className="clr-white fnt-18 text-center">
                Start your free trial and enjoy 3 months of Shopify for $1/month on select plans.
              </p>
              {/* display only on desktop */}
              <section className=" bg-white start-trail-form d-none d-lg-flex d-md-flex">
                <InputField
                  inputPlaceholder="Enter your email address"
                  inputType="email"
                  width="100%"
                  isBgTransparent={true}
                />
                <div className="d-none d-lg-flex d-md-flex justify-content-end ">
                  <AnchorButton
                    isBlackBg={true}
                    isWhiteText={true}
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
                  isBgTransparent={false}
                />
                <AnchorButton
                  isBlackBg={true}
                  isWhiteText={true}
                  hrefLink="#"
                  anchorText="Start free trial"
                  width="100%"
                />
              </div>
              <p className="clr-white text-center">
                Try Shopify free for 3 days, no credit card required. By entering your email, you agree to receive
                marketing emails from Shopify.
              </p>

              {/* top right image */}
              <img
                src="https://cdn.shopify.com/b/shopify-brochure2-assets/0d56efcd813bc72d0427f8863976c3a1.svgz"
                alt=""
                className="subscribe-top-right-img"
              />
              {/* bottom left image */}
              <img
                src="https://cdn.shopify.com/b/shopify-brochure2-assets/1d5f94e0fb634025423acb965ece0b18.svgz"
                alt=""
                className="subscribe-bottom-left-img"
              />
            </div>
          </div>

          <Faq />
        </div>
      </section>
    </>
  );
};

export default OnboardingScreen;
