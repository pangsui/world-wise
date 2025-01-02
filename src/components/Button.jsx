import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ children, onClick, types }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`${styles.btn} ${styles[types]}`}
		>
			{children}
		</button>
	);
};
Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	types: PropTypes.string.isRequired,
};

export default Button;
