import React from 'react';

export default function Button({ children, className, onClick, type, ...props }) {
  return (
    <button className={className} type={type} {...props} onClick={onClick}>
      {children}
    </button>
  );
}
