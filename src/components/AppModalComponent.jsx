import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const AppModal = ({
  isOpen,
  onClose,
  children,
  modalTop,
  modalHeight,
  modalWidth,
  translateXY,
  mobileModalWidth,
  mobileModalHeight,
}) => {
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    // Add event listener to detect window size changes
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  if (!isOpen) return null;

  const modalStyles = {
    backgroundColor: '#fff',
    position: 'fixed',
    top: modalTop,
    left: '50%',
    zIndex: 3,
    width: isMobile ? mobileModalWidth : modalWidth,
    height: isMobile ? mobileModalHeight : modalHeight,
    overflow: 'hidden',
    borderRadius: '10px',
    padding: '1rem',
    transform: translateXY,
    opacity: 0,
    display: 'flex',
  };

  return createPortal(
    <section>
      <div className="app-overlay" onClick={onClose}></div>
      <section className={`app-modal  ${isOpen ? 'transition-modal' : ''}`} style={modalStyles}>
        {children}
      </section>
    </section>,
    document.getElementById('modal'),
  );
};
export default AppModal;

// Prop validation logic
AppModal.propTypes = {
  isOpen: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.node,
  modalTop: PropTypes.string,
  modalHeight: PropTypes.string,
  modalWidth: PropTypes.string,
  translateXY: PropTypes.string,
  mobileModalWidth: PropTypes.string,
  mobileModalHeight: PropTypes.string,
};

AppModal.defaultProps = {
  modalTop: '50%',
  modalHeight: '50vh',
  modalWidth: '50vw',
  translateXY: 'translate(-50%, -50%)',
  mobileModalWidth: '50vw',
  mobileModalHeight: '50vh',
};
