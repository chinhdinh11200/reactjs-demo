import React from 'react';

export default function TableCell({ heading, children, ...props }) {
  return React.createElement(heading ? 'th' : 'td', props, children);
}
