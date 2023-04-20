import PropTypes from 'prop-types'

//Here, we are creating custom button style component that can be reusable when it required.
function Button({children, version, type, isDisabled}) {
    return(
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    version: "primary",
    type: "button",
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button;