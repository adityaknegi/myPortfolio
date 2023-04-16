import React from 'react';
import PropTypes from 'prop-types';

const Container = ({children, type='type1', className, ...property}) => {
    const contentType = {
		type1: "type1",
		type2: "type2",
		type3: "type3",
		type4: "type4",
		type5: "type5",
		type6: "type6",
		type7: "type7",
		type8: "full",
	};
    const containerStyle = {
		type0: "w-full md:max-w-320 mx-auto",
		type1: "w-11/12 md:max-w-320 mx-auto",
		type2: "w-11/12 md:max-w-270 mx-auto",
		type3: "w-11/12 md:max-w-3xl mx-auto",
		type4: "w-11/12 md:max-w-129.752 mx-auto",
		type5: "w-11/12 md:max-w-211.5 mx-auto",
		type6: "w-11/12 md:max-w-48.5 mx-auto",
		type7: "w-11/12 md:max-w-157 mx-auto",
		type8: "w-11/12 md:max-w-130 mx-auto",
		type9: "w-11/12 md:max-w-75.5 mx-auto",
		full: "w-full max-w-full mx-auto"
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