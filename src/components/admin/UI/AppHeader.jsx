import { Link } from 'react-router-dom';
import { whiteShopifyLogo, whiteShopifyTextLogo } from '../../../assets';
import { FaBars } from 'react-icons/fa6';
import PropTypes from 'prop-types';

const AppHeader = (props) => {
  return (
    <header className="shopify-admin-header">
      <Link className="d-flex align-items-baseline d-none d-lg-block" to="/admin/">
        <img src={whiteShopifyLogo} alt="shopify" height="25px" className="icon sm-d-none" />
        <img src={whiteShopifyTextLogo} alt="shopify" height="20px" className="text sm-d-none" />
      </Link>
      <button onClick={props.toggleSidebar} className="d-block d-lg-none">
        <FaBars color="#ffffff94" />
      </button>

      <button className="header-search">
        <span className="d-flex align-items-center gap-1">
          <span>
            <svg
              viewBox="0 0 20 20"
              className="Polaris-Icon__Svg_375hu"
              focusable="false"
              aria-hidden="true"
              fill="#b5b5b59e"
              width="20px"
              height="20px"
            >
              <path
                fillRule="evenodd"
                d="M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
              ></path>
            </svg>
          </span>
          <span>Search</span>
        </span>
        <span>Ctrl K</span>
      </button>

      <div className="d-flex justify-content-end align-items-center gap-2">
        {/* notification dropdown btn */}
        <button className="header-button bell">
          <svg
            viewBox="0 0 20 20"
            className="Polaris-Icon__Svg_375hu"
            focusable="false"
            aria-hidden="true"
            fill="#e3e3e3"
            width="20px"
            height="20px"
          >
            <path
              fillRule="evenodd"
              d="m7.252 14.424-2.446-.281c-1.855-.213-2.38-2.659-.778-3.616l.065-.038a2.887 2.887 0 0 0 1.407-2.48v-.509a4.5 4.5 0 0 1 9 0v.51c0 1.016.535 1.958 1.408 2.479l.065.038c1.602.957 1.076 3.403-.778 3.616l-2.543.292v.365a2.7 2.7 0 0 1-5.4 0v-.376Zm3.9.076h-2.4v.3a1.2 1.2 0 0 0 2.4 0v-.3Zm-3.152-1.5h4l3.024-.348a.452.452 0 0 0 .18-.837l-.065-.038a4.414 4.414 0 0 1-.747-.562 4.387 4.387 0 0 1-1.392-3.205v-.51a3 3 0 0 0-6 0v.51a4.387 4.387 0 0 1-2.138 3.767l-.065.038a.452.452 0 0 0 .18.838l3.023.347Z"
            ></path>
          </svg>
        </button>

        <button className="header-button ms-btn">
          <span className="d-none d-lg-block"> My Store</span>
          <span className="ms">MS</span>
        </button>
      </div>
    </header>
  );
};

// prop validation
AppHeader.propTypes = {
  toggleSidebar: PropTypes.func,
};

export default AppHeader;
