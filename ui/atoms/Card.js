import React from 'react';
import PropTypes from 'prop-types';

const Card = ({children, className, shadow = "shadow-md-5", radius="rounded-xl", onClick = () => true }) => {
    return (
        <div className={`bg-white overflow-hidden ${shadow} ${className} ${radius}`} onClick={onClick}>
            {children}
        </div>
    )
}
export default Card;

Card.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};