import React from 'react'
import Block from '../../atoms/Block'
import LinkItem from '../../atoms/LinkItem'
import Title from '../../atoms/Title'

export default function CardHeader({className, title, button, ...props}) {
  return (
    <Block className={className}>
      <Title heading={4}>{title}</Title>
      <LinkItem className={button?.className} to={button.to}>{button?.title}</LinkItem>
    </Block>
  )
}
