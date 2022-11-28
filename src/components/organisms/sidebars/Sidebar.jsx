import React from 'react';
import Header from '../../molecules/sidebars/Header';
import MenuItem from '../../molecules/MenuItem';
import logo from '../../../assets/logo-icon.png';

export default function Sidebar() {
  return (
    <div className='sidebar-wrapper' data-simplebar='true'>
      <Header className='sidebar-header' logo={logo} />
      <ul className='metismenu' id='menu'>
        <MenuItem
          arrow='has-arrow'
          icon={{
            name: 'bx bx-home-alt',
            size: 'parent-icon',
            color: 'icon-color-2',
          }}
          title={{
            className: 'menu-title',
            content: 'Dashboard',
          }}
        >
          <ul>
            <MenuItem
              to='/admin'
              icon={{ name: 'bx bx-right-arrow-alt' }}
              title={{ content: 'Analytics' }}
            />
            <MenuItem
              icon={{ name: 'bx bx-right-arrow-alt' }}
              title={{ content: 'Sales' }}
            />
          </ul>
        </MenuItem>
        <MenuItem
          to='users'
          icon={{
            name: 'bx bx-user',
            size: 'parent-icon',
            color: 'icon-color-3',
          }}
          title={{
            className: 'menu-title',
            content: 'Users',
          }}
        />
      </ul>
    </div>
  );
}
