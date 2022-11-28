import React from 'react';

export default function Table({ children, className, thead, ...props }) {
  console.log(children);
  return (
    <table className={className} {...props}>
      {children}
    </table>
  );
}
