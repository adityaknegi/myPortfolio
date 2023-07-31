import React from "react";
import PropTypes from "prop-types";

const Tab = ({ children, active, className, onClick, ...props }) => {


  return (
    <div
      className={`${className} px-4 py-2 focus:outline-none  `}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

Tab.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Tab;
