import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const LinkButton = ({ children, href, target, color="text-primary", fontWeight='font-medium', hasSubMenu, display='flex items-center', ...property }) => {
  return (
    <Link href={href } legacyBehavior>
      <a className={`text-sm ${fontWeight} ${display} ${color} ${property.className}`} target={target}>
        {children}
        {/* {hasSubMenu && <ExpandMoreIcon fontSize='small' color='inherit' /> } */}
      </a>
    </Link>
  )
}

export default LinkButton;

LinkButton.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.string,
}