import React from 'react';
import PropTypes from 'prop-types';

const Container = ({children, type, className, ...property}) => {
    const contentType = {
		type1: "type1",
		type2: "type2",
		type3: "type3",
		type4: "type4",
		type5: "type5",
		type6: "type6",
		type7: "type7",
	};
    const containerStyle = {
		type1: "w-full md:max-w-320 mx-auto",
		type2: "w-full md:max-w-184.252",
		type3: "w-full md:max-w-102.752",
		type4: "w-full md:max-w-129.752",
		type5: "w-full md:max-w-211.5 mx-auto",
		type6: "w-full md:max-w-48.5",
		type7: "w-full md:max-w-157",
		type8: "w-full md:max-w-130",
		type9: " w-full md:max-w-211.5 mx-auto ",
	};
    return (
        <div type={contentType[type]} className={` ${containerStyle[type]} ${className || ''}`} {...property}>
            {children}
        </div>
    );

};
export default Container;

Container.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};