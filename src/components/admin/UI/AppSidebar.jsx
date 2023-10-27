import { Link, useLocation } from 'react-router-dom';
import { pointOfSaleIcon, storeIcon } from '../../../assets';
import { FiCornerDownRight } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { SidebarSkeleton } from '../skeletons';
const AppSidebar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/admin/';
  const isOrdersPage = location.pathname === '/admin/orders';
  const isDiscountPage = location.pathname === '/admin/discounts';
  const isProductPage = location.pathname === '/admin/products';
  const isCustomersPage = location.pathname === '/admin/customers';
  const isContentPage = location.pathname === '/admin/content';
  const isAnalyticsPage = location.pathname === '/admin/analytics';

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <SidebarSkeleton />
      ) : (
        <aside className="app-sidebar">
          <ul className="d-flex gap-1 flex-column w-100 p-0">
            <section className="flex-grow-1 d-flex flex-column">
              <li>
                <Link className={isHomePage ? 'sidebar-link active' : 'sidebar-link'} to="/admin/">
                  <span className="sidebar-icon">
                    <svg
                      viewBox="0 0 20 20"
                      className="Polaris-Icon__Svg_375hu"
                      focusable="false"
                      aria-hidden="true"
                      width="20px"
                      height="20px"
                    >
                      <path d="M14 16h-2a1 1 0 0 1-1-1v-2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2.5a1 1 0 0 1-1 1h-2a2 2 0 0 1-2-2v-4.257a3 3 0 0 1 .879-2.122l3.707-3.707a2 2 0 0 1 2.828 0l3.707 3.707a3 3 0 0 1 .879 2.122v4.257a2 2 0 0 1-2 2Z"></path>
                    </svg>
                  </span>

                  <span className="sidebar-text">Home</span>
                </Link>
              </li>

              <li>
                <Link className={isOrdersPage ? 'sidebar-link active' : 'sidebar-link'} to="/admin/orders">
                  <span className="sidebar-icon">
                    <svg
                      viewBox="0 0 20 20"
                      className="Polaris-Icon__Svg_375hu"
                      focusable="false"
                      aria-hidden="true"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.976 3.5a2.75 2.75 0 0 0-2.72 2.347l-.662 4.46a8.75 8.75 0 0 0-.094 1.282v1.661a3.25 3.25 0 0 0 3.25 3.25h6.5a3.25 3.25 0 0 0 3.25-3.25v-1.66c0-.43-.032-.858-.095-1.283l-.66-4.46a2.75 2.75 0 0 0-2.72-2.347h-6.05Zm-1.237 2.567a1.25 1.25 0 0 1 1.237-1.067h6.048c.62 0 1.146.454 1.237 1.067l.583 3.933h-2.484a1.25 1.25 0 0 0-1.185.855l-.159.474a.25.25 0 0 1-.237.171h-1.558a.25.25 0 0 1-.237-.17l-.159-.475a1.25 1.25 0 0 0-1.185-.855h-2.484l.583-3.933Zm-.738 5.433-.001.09v1.66c0 .966.784 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.75-1.75v-1.75h-2.46l-.1.303a1.75 1.75 0 0 1-1.66 1.197h-1.56a1.75 1.75 0 0 1-1.66-1.197l-.1-.303h-2.46Z"
                      ></path>
                    </svg>
                  </span>

                  <span className="sidebar-text">Orders</span>
                </Link>
                <div className={isOrdersPage ? 'd-block' : 'd-none'}>
                  <ul className="sidebar-sub-links-container">
                    <li className="sub-link-item">
                      <FiCornerDownRight className="sub-link-svg" width="15px" color="#5254567d" />
                      <Link className="sub-link">Drafts</Link>
                    </li>
                    <li className="sub-link-item">
                      <FiCornerDownRight className="sub-link-svg" width="15px" color="#5254567d" />
                      <Link className="sub-link">Abandoned Checkouts</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link className={isProductPage ? 'sidebar-link active' : 'sidebar-link'} to="/admin/products">
                  <span className="sidebar-icon">
                    <svg
                      viewBox="0 0 20 20"
                      className="Polaris-Icon__Svg_375hu"
                      focusable="false"
                      aria-hidden="true"
                      width="20px "
                      height="20px"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.025 4h1.725a3.25 3.25 0 0 1 3.25 3.25v1.938a2.5 2.5 0 0 1-.765 1.8l-4.468 4.308a2.5 2.5 0 0 1-3.503-.032l-2.528-2.528a2.5 2.5 0 0 1-.032-3.503l4.161-4.315a3 3 0 0 1 2.16-.918Zm1.975 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                      ></path>
                    </svg>
                  </span>

                  <span className="sidebar-text">Products</span>
                </Link>

                <div className={isProductPage ? 'd-block' : 'd-none'}>
                  <ul className="sidebar-sub-links-container">
                    <li className="sub-link-item">
                      <FiCornerDownRight className="sub-link-svg" width="15px" color="#5254567d" />
                      <Link className="sub-link">Collections</Link>
                    </li>
                    <li className="sub-link-item">
                      <FiCornerDownRight className="sub-link-svg" width="15px" color="#5254567d" />
                      <Link className="sub-link">Inventory</Link>
                    </li>

                    <li className="sub-link-item">
                      <FiCornerDownRight className="sub-link-svg" width="15px" color="#5254567d" />
                      <Link className="sub-link">Purchase orders</Link>
                    </li>

                    <li className="sub-link-item">
                      <FiCornerDownRight className="sub-link-svg" width="15px" color="#5254567d" />
                      <Link className="sub-link">Transfers</Link>
                    </li>
                    <li className="sub-link-item">
                      <FiCornerDownRight className="sub-link-svg" width="15px" color="#5254567d" />
                      <Link className="sub-link">Gift cards</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link className={isCustomersPage ? 'sidebar-link active' : 'sidebar-link'} to="/admin/customers">
                  <span className="sidebar-icon">
                    <svg
                      viewBox="0 0 20 20"
                      className="Polaris-Icon__Svg_375hu"
                      focusable="false"
                      aria-hidden="true"
                      width="20px"
                      height="20px"
                    >
                      <path d="M10 9.75a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"></path>
                      <path d="M10 11.5c-1.968 0-3.815.95-4.959 2.552l-.561.786a1.05 1.05 0 0 0 .855 1.662h9.33a1.05 1.05 0 0 0 .855-1.662l-.561-.786a6.094 6.094 0 0 0-4.959-2.552Z"></path>
                    </svg>
                  </span>

                  <span className="sidebar-text">Customers</span>
                </Link>

                <div className={isCustomersPage ? 'd-block' : 'd-none'}>
                  <ul className="sidebar-sub-links-container">
                    <li className="sub-link-item">
                      <FiCornerDownRight className="sub-link-svg" width="15px" color="#5254567d" />
                      <Link className="sub-link">Segements</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link className={isContentPage ? 'sidebar-link active' : 'sidebar-link'} to="/admin/content">
                  <span className="sidebar-icon">
                    <svg
                      viewBox="0 0 20 20"
                      className="Polaris-Icon__Svg_375hu"
                      focusable="false"
                      aria-hidden="true"
                      width="20px"
                      height="20px"
                    >
                      <path d="M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                      <path
                        fillRule="evenodd"
                        d="M7.42 3.5h5.16c.535 0 .98 0 1.345.03.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073.03.365.03.81.03 1.345v1.91c0 .535 0 .98-.03 1.345-.03.38-.098.736-.27 1.073a2.751 2.751 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27a6.052 6.052 0 0 1-.288.017.744.744 0 0 1-.137.013h-6.08c-.535 0-.98 0-1.345-.03-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.047-.934.75.75 0 0 1-.176-.31c-.157-.324-.22-.667-.25-1.031-.029-.365-.029-.81-.029-1.345v-1.91c0-.535 0-.98.03-1.345.03-.38.098-.736.27-1.073a2.75 2.75 0 0 1 1.202-1.202c.337-.172.693-.24 1.073-.27.365-.03.81-.03 1.345-.03Zm7.58 5.8-.001.533-.135-.192a1.75 1.75 0 0 0-2.778-.116l-1.086 1.303-2.411-2.893a1.75 1.75 0 0 0-2.68-.01l-.909 1.073v-1.548c0-.572 0-.957.025-1.253.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111.296-.024.68-.025 1.253-.025h5.1c.572 0 .957 0 1.252.025.288.023.425.065.516.111.235.12.426.311.546.547.046.09.088.227.111.514.024.296.025.68.025 1.253v1.85Z"
                      ></path>
                      <path d="M4 15.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"></path>
                      <path d="M12.75 15a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"></path>
                    </svg>
                  </span>

                  <span className="sidebar-text">Content</span>
                </Link>
                <div className={isContentPage ? 'd-block' : 'd-none'}>
                  <ul className="sidebar-sub-links-container">
                    <li className="sub-link-item">
                      <FiCornerDownRight className="sub-link-svg" width="15px" color="#5254567d" />
                      <Link className="sub-link">Metaobjects</Link>
                    </li>

                    <li className="sub-link-item">
                      <FiCornerDownRight className="sub-link-svg" width="15px" color="#5254567d" />
                      <Link className="sub-link">Files</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link className={isAnalyticsPage ? 'sidebar-link active' : 'sidebar-link'} to="/admin/analytics">
                  <span className="sidebar-icon">
                    <svg
                      viewBox="0 0 20 20"
                      className="Polaris-Icon__Svg_375hu"
                      focusable="false"
                      aria-hidden="true"
                      width="20px"
                      height="20px"
                    >
                      <path d="M9.983 4c-.101 0-.212 0-.308.006a1.262 1.262 0 0 0-.403.09 1.25 1.25 0 0 0-.677.676 1.262 1.262 0 0 0-.088.403 4.73 4.73 0 0 0-.007.308v10.034c0 .101 0 .212.007.308.007.108.025.25.088.403.127.307.37.55.677.677.152.063.295.081.403.088.096.007.206.007.308.007h.034c.101 0 .212 0 .308-.006a1.246 1.246 0 0 0 1.08-.766c.063-.152.081-.295.088-.403.007-.096.007-.207.007-.308v-10.034c0-.101 0-.212-.007-.308a1.266 1.266 0 0 0-.088-.403 1.25 1.25 0 0 0-.677-.677 1.262 1.262 0 0 0-.403-.088 4.728 4.728 0 0 0-.308-.007h-.034Z"></path>
                      <path d="M5.483 9c-.101 0-.212 0-.308.007a1.262 1.262 0 0 0-.403.088 1.25 1.25 0 0 0-.677.677 1.263 1.263 0 0 0-.088.403 4.728 4.728 0 0 0-.007.308v5.034c0 .101 0 .212.006.308a1.246 1.246 0 0 0 .766 1.08c.152.063.295.081.403.088.096.007.207.007.308.007h.034c.101 0 .212 0 .308-.006a1.246 1.246 0 0 0 1.08-.766 1.28 1.28 0 0 0 .089-.403c.006-.096.006-.207.006-.308v-5.034c0-.101 0-.212-.006-.308a1.263 1.263 0 0 0-.09-.403 1.25 1.25 0 0 0-.676-.677 1.262 1.262 0 0 0-.403-.088 4.73 4.73 0 0 0-.308-.007h-.034Z"></path>
                      <path d="M14.483 6c-.101 0-.212 0-.308.006a1.262 1.262 0 0 0-.403.09 1.25 1.25 0 0 0-.677.676 1.264 1.264 0 0 0-.088.403c-.007.096-.007.207-.007.308v8.034c0 .101 0 .212.007.308.007.108.025.25.088.403.127.307.37.55.677.677.152.063.296.081.403.088.096.007.207.007.308.007h.034c.101 0 .212 0 .308-.006a1.246 1.246 0 0 0 1.08-.766c.063-.152.081-.295.088-.403.007-.096.007-.207.007-.308v-8.034c0-.101 0-.212-.007-.308a1.266 1.266 0 0 0-.088-.403 1.25 1.25 0 0 0-.677-.677 1.262 1.262 0 0 0-.403-.088 4.728 4.728 0 0 0-.308-.007h-.034Z"></path>
                    </svg>
                  </span>

                  <span className="sidebar-text">Analytics</span>
                </Link>

                <div className={isAnalyticsPage ? 'd-block' : 'd-none'}>
                  <ul className="sidebar-sub-links-container">
                    <li className="sub-link-item">
                      <FiCornerDownRight className="sub-link-svg" width="15px" color="#5254567d" />
                      <Link className="sub-link">Reports</Link>
                    </li>

                    <li className="sub-link-item">
                      <FiCornerDownRight className="sub-link-svg" width="15px" color="#5254567d" />
                      <Link className="sub-link">Live views</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link className="sidebar-link">
                  <span className="sidebar-icon">
                    <svg
                      viewBox="0 0 20 20"
                      className="Polaris-Icon__Svg_375hu"
                      focusable="false"
                      aria-hidden="true"
                      width="20px"
                      height="20px"
                    >
                      <path d="M5 10a5 5 0 0 1 10 0 1 1 0 1 0 2 0 7 7 0 1 0-7 7 1 1 0 1 0 0-2 5 5 0 0 1-5-5Z"></path>
                      <path d="M11.29 9.84a1 1 0 0 0 1.98-.278 3.25 3.25 0 1 0-3.782 3.653 1 1 0 1 0 .347-1.97 1.25 1.25 0 1 1 1.455-1.405Z"></path>
                      <path d="M11.611 10.973a.5.5 0 0 0-.638.638l2.121 6.01a.5.5 0 0 0 .871.135l1.172-1.558 1.038 1.037a.5.5 0 0 0 .707 0l.353-.353a.5.5 0 0 0 0-.707l-1.037-1.038 1.558-1.172a.5.5 0 0 0-.135-.87l-6.01-2.122Z"></path>
                    </svg>
                  </span>

                  <span className="sidebar-text">Marketting</span>
                </Link>
              </li>

              <li>
                <Link className={isDiscountPage ? 'sidebar-link active' : 'sidebar-link'} to="/admin/discounts">
                  <span className="sidebar-icon">
                    <svg
                      viewBox="0 0 20 20"
                      className="Polaris-Icon__Svg_375hu"
                      focusable="false"
                      aria-hidden="true"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.527 3.327c-.6-1.306-2.455-1.306-3.054 0a1.68 1.68 0 0 1-2.112.874c-1.347-.5-2.66.813-2.16 2.16a1.68 1.68 0 0 1-.874 2.112c-1.306.6-1.306 2.455 0 3.054a1.68 1.68 0 0 1 .874 2.112c-.5 1.347.813 2.659 2.16 2.16a1.68 1.68 0 0 1 2.112.874c.6 1.306 2.455 1.306 3.054 0a1.68 1.68 0 0 1 2.112-.874c1.347.499 2.66-.813 2.16-2.16a1.68 1.68 0 0 1 .874-2.112c1.306-.6 1.306-2.455 0-3.054a1.68 1.68 0 0 1-.874-2.112c.5-1.347-.813-2.66-2.16-2.16a1.68 1.68 0 0 1-2.112-.874Zm-2.527 4.923a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3.53.53-4 4a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 1 1 1.06 1.06Zm.47 3.47a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                      ></path>
                    </svg>
                  </span>

                  <span className="sidebar-text">Discounts</span>
                </Link>
              </li>

              <div className="mt-3">
                {/* brings out a pop ontop of the search field in the app header area */}
                <button className="side-bar-btn pop-up-btn">
                  <span>Sales Channels</span>
                  <span>
                    <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true" width="15px" height="15px">
                      <path
                        fillRule="evenodd"
                        d="M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
                      ></path>
                    </svg>
                  </span>
                </button>

                <li>
                  <Link className="sidebar-link">
                    <span className="sidebar-icon">
                      <img src={storeIcon} alt="" height="18px" className="sidebar-icon" />
                    </span>

                    <div className="d-flex w-100 justify-content-between">
                      <span className="sidebar-text">Online Store</span>
                      {/* TODO:fix tool tip */}
                      {/* <span className="view-store-svg tool-tip-btn">
                      <svg
                        viewBox="0 0 20 20"
                        className="Polaris-Icon__Svg_375hu"
                        focusable="false"
                        aria-hidden="true"
                        width="18px"
                        height="18px"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          d="M10 4c-2.476 0-4.348 1.23-5.577 2.532a9.266 9.266 0 0 0-1.4 1.922 5.98 5.98 0 0 0-.37.818c-.082.227-.153.488-.153.728s.071.501.152.728c.088.246.213.524.371.818.317.587.784 1.27 1.4 1.922 1.229 1.302 3.1 2.532 5.577 2.532 2.476 0 4.348-1.23 5.577-2.532a9.265 9.265 0 0 0 1.4-1.922 5.98 5.98 0 0 0 .37-.818c.082-.227.153-.488.153-.728s-.071-.501-.152-.728a5.984 5.984 0 0 0-.371-.818 9.269 9.269 0 0 0-1.4-1.922c-1.229-1.302-3.1-2.532-5.577-2.532Zm-5.999 6.002v-.004c.004-.02.017-.09.064-.223a4.5 4.5 0 0 1 .278-.608 7.768 7.768 0 0 1 1.17-1.605c1.042-1.104 2.545-2.062 4.487-2.062 1.942 0 3.445.958 4.486 2.062a7.77 7.77 0 0 1 1.17 1.605c.13.24.221.447.279.608.047.132.06.203.064.223v.004c-.004.02-.017.09-.064.223a4.503 4.503 0 0 1-.278.608 7.768 7.768 0 0 1-1.17 1.605c-1.042 1.104-2.545 2.062-4.487 2.062-1.942 0-3.445-.958-4.486-2.062a7.766 7.766 0 0 1-1.17-1.605 4.5 4.5 0 0 1-.279-.608c-.047-.132-.06-.203-.064-.223Z"
                        ></path>
                      </svg>
  
                      <span className="tool-tip">hello this is my tooltip</span>
                    </span> */}
                    </div>
                  </Link>
                </li>

                <li>
                  <Link className="sidebar-link">
                    <span className="sidebar-icon">
                      <img src={pointOfSaleIcon} alt="" height="18px" className="sidebar-icon" />
                    </span>

                    <span className="sidebar-text">Point of Sale</span>
                  </Link>
                </li>
              </div>

              <div className="mt-3">
                {/* brings out a pop ontop of the search field in the app header area */}
                <button className="side-bar-btn pop-up-btn">
                  <span>Apps</span>
                  <span>
                    <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true" width="15px" height="15px">
                      <path
                        fillRule="evenodd"
                        d="M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
                      ></path>
                    </svg>
                  </span>
                </button>
                <li>
                  <Link className="sidebar-link">
                    <span className="sidebar-icon">
                      <svg
                        viewBox="0 0 20 20"
                        className="Polaris-Icon__Svg_375hu"
                        focusable="false"
                        aria-hidden="true"
                        width="20px"
                        height="20px"
                      >
                        <path d="M6.25 10a.75.75 0 0 1 .75-.75h2.25v-2.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1-.75-.75Z"></path>
                        <path
                          fillRule="evenodd"
                          d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
                        ></path>
                      </svg>
                    </span>

                    <span className="sidebar-text">Add Apps</span>
                  </Link>
                </li>
              </div>
            </section>
            <div>
              <li>
                <Link className="sidebar-link">
                  <span className="sidebar-icon">
                    <svg
                      viewBox="0 0 20 20"
                      className="Polaris-Icon__Svg_375hu"
                      focusable="false"
                      aria-hidden="true"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.013 4.389c0-.767.621-1.389 1.389-1.389h1.196c.767 0 1.39.622 1.39 1.389v.66c0 .153.101.33.307.436.141.074.278.155.411.241.196.128.402.13.536.052l.576-.332a1.389 1.389 0 0 1 1.897.508l.599 1.037a1.39 1.39 0 0 1-.509 1.897l-.621.359c-.131.075-.232.249-.225.477a5.135 5.135 0 0 1-.004.427c-.012.233.09.412.223.489l.627.362c.665.384.892 1.233.509 1.897l-.599 1.037a1.39 1.39 0 0 1-1.897.508l-.672-.388c-.132-.076-.332-.076-.526.045a4.928 4.928 0 0 1-.325.185c-.206.108-.308.284-.308.437v.778a1.39 1.39 0 0 1-1.389 1.39h-1.196a1.389 1.389 0 0 1-1.39-1.39v-.778c0-.153-.102-.33-.307-.437a4.96 4.96 0 0 1-.325-.185c-.194-.121-.395-.12-.526-.045l-.672.388a1.39 1.39 0 0 1-1.898-.508l-.598-1.037a1.389 1.389 0 0 1 .509-1.897l.627-.362c.133-.077.235-.256.223-.49a5.03 5.03 0 0 1-.004-.426c.007-.228-.094-.401-.225-.477l-.621-.359a1.389 1.389 0 0 1-.509-1.897l.598-1.037a1.389 1.389 0 0 1 1.898-.508l.576.332c.133.078.34.076.535-.052a4.81 4.81 0 0 1 .412-.24c.205-.108.308-.284.308-.437v-.66Zm1.987 7.611a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                      ></path>
                    </svg>
                  </span>

                  <span className="sidebar-text">Settings</span>
                </Link>
              </li>
            </div>
          </ul>
        </aside>
      )}
    </>
  );
};

export default AppSidebar;
