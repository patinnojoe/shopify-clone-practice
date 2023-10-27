import { Link } from 'react-router-dom';
import { Dashboard } from './UI';
import { useState, useEffect } from 'react';
import { ProductsSkeleton } from './skeletons';

const Orders = () => {
  document.title = 'My Store - Orders - Shopify';
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
        <section className="content-wrapper orders">
          <h5 className="fw-bold">Orders</h5>
          <div className="page-white-container shadow-sm">
            <img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/0ecc04f85cc74cb4.svg" alt="" />
            <div className=" d-flex flex-column gap-2 justify-content-center align-items-center mb-5">
              <p className="fw-bold fnt-13 text-center">Your orders will show here</p>
              <p className="fnt-13 text-center m-auto sub-text">
                To get orders and accept payments from customers, you need to select a plan. You’ll only be charged for
                your plan after your free trial ends.
              </p>

              <button className="shopify-primary-btn active">Select plan</button>
            </div>
          </div>
          <p className="fnt-14 text-center">
            Learn more about <Link>orders</Link>
          </p>
        </section>
      )}
    </Dashboard>
  );
};

export default Orders;
