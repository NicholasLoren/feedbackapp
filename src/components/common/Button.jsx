import PropTypes from "prop-types";

const Button = ({ children, isDisabled, type, version }) => {
  return (
    <button disabled={isDisabled} type={type} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.propType = {
  isDisabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};

Button.defaultProps = {
  isDisabled: false,
  type: "submit",
  version: "primary",
};

export default Button;
