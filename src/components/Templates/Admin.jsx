import React from 'react';
import {Outlet, Route} from 'react-router-dom';

import Header from '../organisms/Header';
import Sidebar from '../organisms/sidebars/Sidebar';

export default function Admin() {
  return (
    <div className='wrapper'>
      <Sidebar />
      <Header />
      <div className='page-wrapper'>
        <div className='page-content-wrapper'>
          <div className='page-content'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
