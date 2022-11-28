import React from 'react';

export default function Typography({ children, type, ...props }) {
  return React.createElement(`${type}`, props, children);
}
