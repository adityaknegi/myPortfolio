"use client"

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';


const LinkButton = ({ children, href, target, color="text-primary", fontWeight='font-medium', hasSubMenu, display='flex items-center', ...property }) => {
  return (
    <Link href={href } legacyBehavior>
      <div className={`text-sm  cursor-pointe ${fontWeight} ${display} ${color} ${property.className}`} target={target}>
        {children}
      </div>
    </Link>
  )
}

export default LinkButton;

LinkButton.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.string,
}