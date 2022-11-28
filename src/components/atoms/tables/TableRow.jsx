import React from 'react'

export default function TableRow({children, className, ...props}) {
  return (
    <tr className={className}>{children}</tr>
  )
}
