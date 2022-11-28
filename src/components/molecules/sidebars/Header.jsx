import React from 'react';

import Image from '../../atoms/Image';
import Title from '../../atoms/Title';
import ButtonIcon from '../buttons/ButtonIcon';

export default function Header({ className, logo, ...props }) {
  return (
    <div className={className}>
      <Image src={logo} className='logo-icon-2' alt='' />
      <Title heading={4} className='logo-text'>Syndash</Title>
      <ButtonIcon buttonClass='toggle-btn ms-auto border-none' iconClass='bx bx-home' />
    </div>
  );
}
