import React from "react";
import PropTypes from "prop-types";
import NextImage from 'next/image';
const Logo = ({isMobileLogo, ...property}) => {

    return (
        <div className="logo_wrap">
            <div className={`cursor-pointer ${property.desktopLogoClassName}`}>
                <NextImage onClick={property.onClick} src={property.src} width={property.width || ""} height={property.height || ""} alt={`${property.alt}`} />
            </div>
            {isMobileLogo && <div className={`cursor-pointer  ${property.mobileLogoClassName}`}>
                <NextImage onClick={property.onClick} src={property.mobileLogoSrc} width={property.M_width || ""} height={property.M_height || ""}  alt={`${property.alt}`} />
            </div>}
        </div>
    )
}

export default Logo


Logo.propTypes = {
    desktopLogoClassName: PropTypes.string,
    mobileLogoClassName: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    alt: PropTypes.string,
  };