import React from 'react'

export default function Block({children, className, ...props}) {
  return (
    <div className={className}>{children}</div>
  )
}
