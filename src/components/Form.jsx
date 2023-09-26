import PropTypes from 'prop-types';

const Form = (props) => {
  return (
    <div className="ui-form-container">
      <form action={props.action} method={props.method} id={props.id} className="ui-form">
        {props.children}
      </form>
    </div>
  );
};
Form.propTypes = {
  action: PropTypes.string,
  method: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
};
// prop validation
export default Form;
