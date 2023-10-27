import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Dashboard } from './UI';
import { ProgressBar } from 'react-bootstrap';
import { FaXmark } from 'react-icons/fa6';
import PropTypes from 'prop-types';

import { guideItems } from './constants';
import { useState, useEffect } from 'react';
import { HomeSkeleton } from './skeletons';

const Home = () => {
  document.title = 'My Store - Home - Shopify';
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Toggle state
  const [openedItemIndex, setOpenedItemIndex] = useState(0);

  // Toggle function
  const toggleGuide = (index) => {
    if (openedItemIndex === index) {
      setOpenedItemIndex(-1); // Close the currently opened item
    } else {
      setOpenedItemIndex(index); // Open the clicked item
    }
  };

  return (
    <Dashboard>
      {isLoading ? (
        <HomeSkeleton />
      ) : (
        <div className="content-wrapper">
          {/* Trial banner */}
          <div className="d-flex justify-content-center align-items-center">
            <div className="notification-tab">
              <span>Extend your trial for $1/month for 3 months on select plans.</span>
              <span className="select-plan-container">
                <button className="trial-btn">Select a plan</button>
                <FaXmark color="#fff" fontSize="12px" className="cursor-pointer" />
              </span>
            </div>
          </div>

          {/* App setup tutorial */}
          <section className="app-tutorial-guide">
            <header className="d-flex flex-column gap-2 p-3">
              <div className="d-flex justify-content-between">
                <span className="fw-bold">Setup guide</span>
                <span className="caret-span">
                  <FaChevronUp color="#09090961" size={13} className="caret" />
                </span>
                <span className="caret-span d-none">
                  <FaChevronDown color="#09090961" size={13} className="caret " />
                </span>
              </div>
              <p className="fnt-13">Use this personalized guide to get your store up and running.</p>
              <div className="d-flex align-items-center gap-2">
                <span>0 of 9 tasks completed</span>
                <ProgressBar variant="info" now="20%" />
              </div>
            </header>

            <div className="app-tutorial-guide-content">
              <section className="online-store-section">
                {guideItems.map((item, index) => (
                  <GuideItem
                    key={index}
                    headerText={item.headerText}
                    subText={item.subText}
                    actionBtn={item.actionBtn}
                    itemImage={item.itemImage}
                    headerTitle={item.headerTitle}
                    isOpen={index === openedItemIndex}
                    subOptions={item.subOptions}
                    onToggle={() => toggleGuide(index)}
                  />
                ))}
              </section>
            </div>
          </section>
        </div>
      )}
    </Dashboard>
  );
};

export default Home;

export function GuideItem(props) {
  return (
    <div>
      <header className="d-flex justify-content-between px-3 py-3 sub-header-section" onClick={props.onToggle}>
        <span className="fw-bold fnt-14">{props.headerTitle}</span>
        <FaChevronUp color="#09090961" size={13} className={!props.isOpen ? 'caret d-block ' : 'caret d-none'} />
        <FaChevronDown color="#09090961" size={13} className={props.isOpen ? 'caret d-block ' : 'caret d-none'} />
      </header>

      <section className={props.isOpen ? 'd-block' : 'd-none'}>
        <div className="guide-item-container mx-3 mt-2">
          <div className="d-flex gap-2 align-items-center">
            <span className="dotted-circle"></span>
            <p className="fnt-13 clr-black fw-bold">{props.headerText}</p>
          </div>
          <div className="d-flex w-100 justify-content-between px-4 ">
            <span className="d-flex flex-column gap-2 mt-3 actionBtn">
              {/* Insert HTML content using dangerouslySetInnerHTML */}
              <div dangerouslySetInnerHTML={{ __html: props.subText }} />
              <div dangerouslySetInnerHTML={{ __html: props.actionBtn }} />
            </span>

            <img className="itemImage" src={props.itemImage} alt="" />
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: props.subOptions }} />
      </section>
    </div>
  );
}
// prop validation

GuideItem.propTypes = {
  onToggle: PropTypes.func,
  headerTitle: PropTypes.string,
  isOpen: PropTypes.bool,
  headerText: PropTypes.string,
  subText: PropTypes.node,
  actionBtn: PropTypes.node,
  itemImage: PropTypes.string,
  subOptions: PropTypes.node,
};
