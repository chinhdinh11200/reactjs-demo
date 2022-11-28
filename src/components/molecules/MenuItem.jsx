import React from 'react';
import Icon from '../atoms/Icon';
import Typography from '../atoms/Typography';
import LinkItem from '../atoms/LinkItem';

export default function MenuItem({ children, className, icon, title, arrow, to, ...props }) {
  return (
    <li className={className} {...props}>
      <LinkItem className={`${arrow}`} to={to}>
        <Icon className={`${icon?.name} ${icon?.size} ${icon?.color}`}/>
        <Typography type='span' className={title?.className}>{title?.content}</Typography>
      </LinkItem>
      {children}
    </li>
  );
}
