import PropTypes from 'prop-types';

const Heading = ({children, type, ...property}) => {
    const issubheading = type?.includes('subheading')
    const HeadingVariants = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
    };
    const subHeadingStyle = {
        subheading1:"text-xl leading-6 font-Nunito",
        subheading2:"text-base leading-6 font-Nunito",
        subheading3:"text-sm leading-5 font-Nunito",
        subheading4:"text-xs leading-4 font-Nunito",
    };

    let Type = HeadingVariants[type] ? HeadingVariants[type] : 'h1'
    Type = issubheading ? "p" : Type
    property.className = issubheading ? `${subHeadingStyle[type] || ""} ${property.className || ""}` : `${property.className || "" }`
    if (!issubheading && !property.className) delete property.className
	return (
        <Type {...property}>
            {children}
        </Type>
	);
};

export default Heading;
Heading.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};