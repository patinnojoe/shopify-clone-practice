import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnchorButton, ArrowAnnimatedLink } from './UI';

import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AppAnnouncement = (props) => {
  // check if component is fixed
  const [isFixed, setIsFixed] = useState(false);

  // check if component is visible
  const [isHidden, setHidden] = useState(false);

  const handleCancelClick = () => {
    setHidden(true);
  };

  // use effect for annoncement
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isHidden) {
    return null;
  }

  return (
    <>
      {isFixed ? (
        <div className={isHidden ? 'hidden' : 'show announcement-wrapper fixed-at-top bg-white'}>
          <div className="d-flex flex-column gap-2 align-items-center justify-content-center gap-md-5 flex-md-row m-auto">
            <span className="fw-bold">Start your free-trial today</span>
            <div className="d-flex align-items-center gap-2 md-gap-3">
              <Link to="/signup" className="custom-link">
                <AnchorButton
                  isBlackBg={true}
                  isWhiteText={true}
                  hrefLink="#"
                  anchorText="Get started"
                  padding="unset"
                  height="39px"
                  fontSize="14px"
                  width="110px"
                  displayType="flex"
                />
              </Link>

              <Link to="/signup" className="custom-link">
                <AnchorButton
                  isBlackBg={false}
                  isWhiteText={false}
                  hrefLink="#"
                  anchorText="Learn More"
                  padding="unset"
                  height="39px"
                  fontSize="14px"
                  width="110px"
                  displayType="flex"
                />
              </Link>
            </div>
          </div>

          <FaXmark className="cancel-announcement" onClick={handleCancelClick} />
        </div>
      ) : (
        <div className={isHidden ? 'hidden' : 'announcement-wrapper show'}>
          <div className=" d-flex gap-2 align-items-center justify-content-center m-auto">
            <span className="d-flex gap-2 align-items-center flex-wrap announcement-text">
              {props.announcementText}
              <span className="d-flex gap-3 align-items-center">
                <Link to="/signup" className="custom-link">
                  <a href={props.hrefLink} className="anchor-tag">
                    {props.anchorText}
                  </a>
                </Link>
                <span className=""> | </span>
                <Link to="/signup" className="custom-link">
                  <ArrowAnnimatedLink hrefLink="#" anchorText="Start Free Trial" />
                </Link>
              </span>
            </span>
          </div>

          <FaXmark className="cancel-announcement" onClick={handleCancelClick} />
        </div>
      )}
    </>
  );
};

AppAnnouncement.propTypes = {
  announcementText: PropTypes.string.isRequired,
  hrefLink: PropTypes.string,
  anchorText: PropTypes.string.isRequired,
};

export default AppAnnouncement;
