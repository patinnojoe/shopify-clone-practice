import { shopifyLogo } from '../assets';
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
            <div className="front-users-container">
              <div className="row g-5custom">
                <div className="col-xl-3 col-lg-3 col-6">
                  <img
                    src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en/allbirds-en-32a9094fcaa4ba7a127ff52a9a8a051a501bee2dbc853e77b58347239eba2e31.svg"
                    alt=""
                    className="front-page-users-logo"
                  />
                </div>

                <div className="col-xl-3 col-lg-3 col-6">
                  <img
                    src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en/gymshark-6dee5a0bce30830832bb264c6abe948259f5fbc3fae496363d65b93285c0def0.svg"
                    alt=""
                    className="front-page-users-logo"
                  />
                </div>

                <div className="col-xl-3 col-lg-3 col-6">
                  <img
                    src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en/brooklinen-en-97e99d6b63701f9e8e01fa31088abea5471e0bffbc5399249d88efab78f09ad7.svg"
                    alt=""
                    className="front-page-users-logo"
                  />
                </div>

                <div className="col-xl-3 col-lg-3 col-6">
                  <img
                    src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en/leesa-en-2b8ff54cd3589e8f971a15bec9d18d284f341e021f6d3b5342e5df0b99f90aa6.svg"
                    alt=""
                    className="front-page-users-logo"
                  />
                </div>

                <div className="col-xl-3 col-lg-3 col-6">
                  <img
                    src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en/kylie-cosmetics-260bf2e2e655124c9331d97c26967ee10d71bd7384265e76013422c1d1386f84.svg"
                    alt=""
                    className="front-page-users-logo"
                  />
                </div>

                <div className="col-xl-3 col-lg-3 col-6">
                  <img
                    src="https://cdn.shopify.com/b/shopify-brochure2-assets/ea78a94066ce7611983fd5796d4d1a06.svg"
                    alt=""
                    className="front-page-users-logo"
                  />
                </div>

                <div className="col-xl-3 col-lg-3 col-6">
                  <img
                    src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en/untuckit-en-ec6d2da1666f7817bd38320be4500cee061c9f2b1868f0bcf141e2cecbf4f876.svg"
                    alt=""
                    className="front-page-users-logo"
                  />
                </div>

                <div className="col-xl-3 col-lg-3 col-6">
                  <img
                    src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en/death-wish-coffee-9512e9d17fdeedebb9abfce9ce082598ee47d470fd0f0272ccac128044b7fc70.svg"
                    alt=""
                    className="front-page-users-logo"
                  />
                </div>

                <div className="col-xl-3 col-lg-3 col-6">
                  <img
                    src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en/jungalow-en-db026f34f2a0e403d05c12364aa7e8525c04a1bee09adfc20b794c1badec72d7.svg"
                    alt=""
                    className="front-page-users-logo"
                  />
                </div>

                <div className="col-xl-3 col-lg-3 col-6">
                  <img
                    src="https://cdn.shopify.com/shopifycloud/brochure/assets/cms/logo-soup/en/rebecca-minkoff-3d13302faef2bb4815be8aa24b005dc5969f51f8b46eabf5cc397b526f2b5e8e.svg"
                    alt=""
                    className="front-page-users-logo"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default OnboardingScreen;
