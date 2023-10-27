import { Link } from 'react-router-dom';
import { Dashboard } from './UI';
import { useState, useEffect } from 'react';
import { ProductsSkeleton } from './skeletons';

const Products = () => {
  document.title = 'My Store - Products - Shopify';

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
        // Render ProductsSkeleton while loading
        <ProductsSkeleton />
      ) : (
        <section className="content-wrapper">
          <h5 className="fw-bold">Products</h5>
          <div className="page-white-container shadow-sm">
            <img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/67d1bd2ad29c4adc.svg" alt="" />
            <div className=" d-flex flex-column gap-2 justify-content-center align-items-center mb-5">
              <p className="fw-bold fnt-13 text-center">First up: what are you selling?</p>
              <p className="fnt-13 text-center m-auto ">Before you open your store, first you need some products.</p>

              <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 mt-3">
                <button className="shopify-primary-border-btn ">Find product to sell</button>
                <button className="shopify-primary-border-btn ">Import products</button>

                <button className="shopify-primary-btn active">Add your products</button>
              </div>
            </div>
          </div>
          <p className="fnt-14 text-center">
            Learn more about <Link>products</Link>
          </p>
        </section>
      )}
    </Dashboard>
  );
};

export default Products;
