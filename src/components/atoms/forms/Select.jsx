import React from 'react'

export default function Select({className, option, ...props}) {
  return (
    <select className={className} {...props}>{option}</select>
  )
}
