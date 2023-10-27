import { Link } from 'react-router-dom';
import { Dashboard } from './UI';
import { useState, useEffect } from 'react';
import { ProductsSkeleton } from './skeletons';

const Content = () => {
  document.title = 'My Store - Content - Shopify';
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
        <section className="content-wrapper">
          <h5 className="fw-bold">Metaobjects</h5>
          <div className="page-white-container shadow-sm">
            <img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/ffa365e5f741fc70.svg" alt="" />
            <div className=" d-flex flex-column gap-2 justify-content-center align-items-center mb-5">
              <p className="fw-bold fnt-13 text-center">Create your first metaobject definition</p>
              <p className="sub-text">
                Metaobjects are a powerful way to add custom, multi-field objects to your store. Use them to display
                unique information like cart upsells, size guides, or product highlights.
              </p>

              <p className="fnt-13 text-center m-auto w-50">
                To add a single field, <Link>visit metafields.</Link>
              </p>

              <div className="d-flex align-items-center gap-2 mt-3">
                <button className="shopify-primary-btn active">Add definition</button>
              </div>
            </div>
          </div>
          <p className="fnt-14 text-center">
            Learn more about <Link>metaobjects</Link>
          </p>
        </section>
      )}
    </Dashboard>
  );
};

export default Content;
