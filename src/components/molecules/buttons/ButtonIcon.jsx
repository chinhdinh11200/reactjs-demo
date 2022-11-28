import React from 'react'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'

export default function ButtonIcon({buttonClass, iconClass, onClick, ...props}) {
  return (
    <Button className={buttonClass} onClick={onClick}>
      <Icon className={iconClass} />
    </Button>
  )
}
