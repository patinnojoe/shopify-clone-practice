import { Link } from 'react-router-dom';
import { AppHeader, AppSidebar } from './UI';

const Discounts = () => {
  document.title = 'My Store - Discounts - Shopify';
  return (
    <div>
      <AppHeader />
      <div className="page-wrapper">
        <AppSidebar />
        <main className="page-inner">
          <section className="d-flex flex-column gap-4">
            <div className="discount-header">
              <h5 className="fw-bold">Discounts</h5>
              <div className="d-flex align-items-center gap-2">
                <button className="shopify-primary-btn grey-btn">Export</button>
                <button className="shopify-primary-btn active">Create account</button>
              </div>
            </div>
            <div className="page-white-container shadow-sm">
              <img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/b8d201c5328e302a.svg" alt="" />
              <div className=" d-flex flex-column gap-2 justify-content-center align-items-center mb-5">
                <p className="fw-bold fnt-13 text-center">Manage discounts and promotions</p>
                <p className="fnt-13 text-center m-auto w-50">
                  Create discount codes and automatic discounts that apply at checkout. You can also use discounts with{' '}
                  <Link>compare at prices.</Link>
                </p>

                <button className="shopify-primary-btn active">Create discounts</button>
              </div>
            </div>
            <p className="fnt-14 text-center">
              Learn more about <Link>discounts</Link>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Discounts;
