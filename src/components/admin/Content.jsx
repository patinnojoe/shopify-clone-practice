import { Link } from 'react-router-dom';
import { AppHeader, AppSidebar } from './UI';

const Content = () => {
  document.title = 'My Store - Content - Shopify';
  return (
    <div>
      <AppHeader />
      <div className="page-wrapper">
        <AppSidebar />
        <main className="page-inner">
          <section className="d-flex flex-column gap-4">
            <h5 className="fw-bold">Metaobjects</h5>
            <div className="page-white-container shadow-sm">
              <img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/ffa365e5f741fc70.svg" alt="" />
              <div className=" d-flex flex-column gap-2 justify-content-center align-items-center mb-5">
                <p className="fw-bold fnt-13 text-center">Create your first metaobject definition</p>
                <p className="fnt-13 text-center m-auto w-50">
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
        </main>
      </div>
    </div>
  );
};

export default Content;
