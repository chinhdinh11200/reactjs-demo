import React from 'react';
import avatar from '../../../assets/avatar-8.png';
import LinkItem from '../../atoms/LinkItem';
import Image from '../../atoms/Image'
import Typography from '../../atoms/Typography';

export default function UserInfo() {
  return (
    <LinkItem
      className='nav-link dropdown-toggle dropdown-toggle-nocaret d-flex user-box align-items-center'
      data-bs-toggle='dropdown'
    >
      <div className='user-info'>
        <Typography type='p' className='user-name mb-0'>Jessica Doe</Typography>
        <Typography type='span' className='designattion mb-0'>Available</Typography>
      </div>
      <Image src={avatar} className='user-img' alt='' />
    </LinkItem>
  );
}
