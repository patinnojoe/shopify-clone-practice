import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

const ArrowAnnimatedLink = (props) => {
  return (
    <span className="animated-anchor-tag">
      <a href={props.hrefLink} className="anchor-tag">
        {props.anchorText}
      </a>
      <FaArrowRight className="animated-icon" />
    </span>
  );
};

ArrowAnnimatedLink.propTypes = {
  hrefLink: PropTypes.string,
  anchorText: PropTypes.string,
};

export default ArrowAnnimatedLink;
