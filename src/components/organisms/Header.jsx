import React from 'react';
import ButtonIcon from '../molecules/buttons/ButtonIcon';
import SearchHeader from '../molecules/headers/SearchHeader';
import UserInfo from '../molecules/headers/UserInfo';
import MenuItem from '../molecules/MenuItem';

export default function Header() {
  return (
    <header className='top-header'>
      <nav className='navbar navbar-expand'>
        <div className='left-topbar d-flex align-items-center'>
          <ButtonIcon
            buttonClass='toggle-btn border-none'
            iconClass='bx bx-menu'
          />
        </div>

        <div className='flex-grow-1 search-bar'>
          <SearchHeader className='input-group' />
        </div>
        <div className='right-topbar ms-auto'>
          <ul className='navbar-nav'>
            <li className='nav-item dropdown dropdown-user-profile'>
              <UserInfo />
              <ul className='dropdown-menu dropdown-menu-end'>
                <MenuItem
                  className='dropdown-item'
                  icon={{ name: 'bx bx-user' }}
                  title={{ content: 'Profile' }}
                />
                <MenuItem
                  className='dropdown-item'
                  icon={{ name: 'bx bx-cog' }}
                  title={{ content: 'Settings' }}
                />
                <MenuItem
                  className='dropdown-item'
                  icon={{ name: 'bx bx-tachometer' }}
                  title={{ content: 'Dashboard' }}
                />
                <MenuItem
                  className='dropdown-item'
                  icon={{ name: 'bx bx-power-off' }}
                  title={{ content: 'Logout' }}
                />
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
