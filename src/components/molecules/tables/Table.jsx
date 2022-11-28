import React from 'react'

export default function Table({className, header, footer, children, ...props}) {
  return (
    <table className={className} {...props}>
      {header && <thead>{header}</thead>}
      <tbody>{children}</tbody>
      {footer && <tfoot>{footer}</tfoot>}
    </table>
  )
}
