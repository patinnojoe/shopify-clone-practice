import { Link } from 'react-router-dom';
import { AppHeader, AppSidebar } from './UI';

const Products = () => {
  document.title = 'My Store - Products - Shopify';
  return (
    <div>
      <AppHeader />
      <div className="page-wrapper">
        <AppSidebar />
        <main className="page-inner">
          <section className="d-flex flex-column gap-4">
            <h5 className="fw-bold">Products</h5>
            <div className="page-white-container shadow-sm">
              <img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/67d1bd2ad29c4adc.svg" alt="" />
              <div className=" d-flex flex-column gap-2 justify-content-center align-items-center mb-5">
                <p className="fw-bold fnt-13 text-center">First up: what are you selling?</p>
                <p className="fnt-13 text-center m-auto ">Before you open your store, first you need some products.</p>

                <div className="d-flex align-items-center gap-2 mt-3">
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
        </main>
      </div>
    </div>
  );
};

export default Products;
