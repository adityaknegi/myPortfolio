"use client"

import PropTypes from "prop-types";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Button = ({ children, onClick, isArrowShow=false, flex="flex", justify="justify-center", type = "text", ...property }) => {

    const buttonType = {
		smallContained: "smallContained",
		smallOutlined: "smallOutlined",
		smallText: "smallText",
		smallAlternate: "smallAlternate",

        mediumContained: "mediumContained",
		mediumOutlined: "mediumOutlined",
		mediumText: "mediumText",
		mediumAlternate: "mediumAlternate",

        largeContained: "largeContained",
		largeOutlined: "largeOutlined",
		largeText: "largeText",
		largeAlternate: "largeAlternate",

		mediumTextWhite: "mediumTextWhite",


	};

	const buttonStyle = {
        smallContained:"bg-primary-main   text-white rounded-full items-center leading-5 text-sm py-0.5 px-3 whitespace-pre",
        smallOutlined:" text-primary-main rounded-full items-center border border-primary-main leading-5 text-sm py-0.5 px-3 whitespace-pre",
        smallText:" text-primary-main rounded-full items-center leading-5 text-sm py-0.5 px-1 whitespace-pre",
        smallAlternate:"text-primary-main rounded-full items-center leading-5 text-sm py-0.5 px-3 whitespace-pre",

        mediumContained:"bg-primary-main   text-white rounded-full items-center leading-5 text-sm py-2 px-4 whitespace-pre",
        mediumOutlined:" text-primary-main rounded-full items-center border border-primary-main leading-5 text-sm py-2 px-4 whitespace-pre",
        mediumText:" text-primary-main rounded-full items-center leading-5 text-sm p-2 whitespace-pre",
        mediumAlternate:"text-primary-main rounded-full items-center leading-5 text-sm py-2 px-4 whitespace-pre",

        largeContained:"bg-primary-main   text-white rounded-full items-center leading-6 text-base py-3 px-5 whitespace-pre",
        largeOutlined:" text-primary-main rounded-full items-center border border-primary-main leading-6 text-base py-3 px-5 whitespace-pre",
        largeText:" text-primary-main rounded-full items-center leading-6 text-base py-3 px-4 whitespace-pre",
        largeAlternate:"text-primary-main rounded-full items-center leading-6 text-base py-3 px-5 whitespace-pre",
        
        mediumTextWhite:" text-white rounded-full items-center leading-5 text-sm p-2 whitespace-pre",
	};



    return (
        <button type={buttonType[type]} className={` ${flex} ${justify} ${property.className} ${buttonStyle[type]} ${property.disabled && 'cursor-not-allowed opacity-50 hover:opacity-50 '}`} onClick={(e) => onClick && onClick(e)} 
        {...(property.disabled && { disabled: property.disabled }) } {...( property.style  &&{style:property.style })}>
            {children}
            {isArrowShow && (
                <ArrowRightIcon fontSize="small" style={{ fontSize: 14 }} className="ml-2" /> 
            )}
        </button>
    );
};
export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  isArrowShow:PropTypes.bool,
};
