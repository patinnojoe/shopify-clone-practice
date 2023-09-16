import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnchorButton, ArrowAnnimatedLink } from './UI';

import { FaXmark } from 'react-icons/fa6';

const AppAnnouncement = (props) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        // Adjust this value as needed
        setIsFixed(true);
        console.log('fix now');
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isFixed ? (
        <div className="announcement-wrapper fixed-at-top bg-white">
          <div className="d-flex flex-column gap-2 align-items-center justify-content-center gap-md-5 flex-md-row m-auto">
            <span className="fw-bold">Start your free-trial today</span>
            <div className="d-flex align-items-center gap-2 md-gap-3">
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
            </div>
          </div>

          <FaXmark className="cancel-announcement" />
        </div>
      ) : (
        <div className="announcement-wrapper">
          <div className=" d-flex gap-2 align-items-center justify-content-center m-auto">
            <span className="d-flex gap-2 align-items-center flex-wrap announcement-text">
              {props.announcementText}
              <span className="d-flex gap-3 align-items-center">
                <a href={props.hrefLink} className="anchor-tag">
                  {props.anchorText}
                </a>
                <span className=""> | </span>
                <ArrowAnnimatedLink hrefLink="#" anchorText="Start Free Trial" />
              </span>
            </span>
          </div>

          <FaXmark className="cancel-announcement" />
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
