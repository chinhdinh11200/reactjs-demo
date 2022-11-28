import React from 'react';

export default function Title({ children, heading, ...props }) {
  return React.createElement(`h${heading}`, props, children);
}
