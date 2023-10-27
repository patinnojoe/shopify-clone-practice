import { Link } from 'react-router-dom';
import { Dashboard } from './UI';
import { useState, useEffect } from 'react';
import { ProductsSkeleton } from './skeletons';
// end of import

const Customers = () => {
  document.title = 'My Store - Customers - Shopify';

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Dashboard>
      {isLoading ? (
        <ProductsSkeleton />
      ) : (
        <section className="content-wrapper customers">
          <h5 className="fw-bold">Customers</h5>
          <div className="page-white-container shadow-sm">
            <img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/93a30c07e111eac4.svg" alt="" />
            <div className=" d-flex flex-column gap-2 justify-content-center align-items-center mb-5">
              <p className="fw-bold fnt-13 text-center">Everything customers-related in one place</p>
              <p className="sub-text">
                Manage customer details, see customer order history, and group customers into segments.
              </p>

              <div className="d-flex align-items-center gap-2 mt-3">
                <button className="shopify-primary-border-btn ">Import customers</button>

                <button className="shopify-primary-btn active">Add customers</button>
              </div>
            </div>
          </div>
          <p className="fnt-14 text-center">
            Learn more about <Link>customers</Link>
          </p>
        </section>
      )}
    </Dashboard>
  );
};

export default Customers;
