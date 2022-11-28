import React from 'react';
import {Link} from 'react-router-dom';

export default function LinkItem({children, className, to, ...props}) {
  return (
    <Link to={to} className={className} {...props}>{children}</Link>
  )
}
