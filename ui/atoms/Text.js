import PropTypes from 'prop-types';

const Text = ({ children, name, type='bodyStyleDefault', ...property}) => {

	const textStyle = {
		bodyStyleExtraLarge: "font-Nunito text-xl",
		bodyStyleMedium: "font-Nunito text-lg",
        bodyStyleLarge: "font-Nunito text-base",
		bodyStyleDefault: "font-Nunito text-sm leading-6",
		bodyStyleSmall: "font-Nunito text-xs",
	};

	return (
		<p {...property} type={type} className= {`${textStyle[type]} ${property.className}`}>{children}</p>
	);
};

export default Text;

Text.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};