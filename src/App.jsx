import {Routes, Route} from 'react-router-dom';

import Admin from './components/Templates/Admin';
import List from './components/pages/users/ListUser';
import Users from './components/pages/users';
import CreateUser from './components/pages/users/CreateUser';
import EditUser from './components/pages/users/EditUser';

// const route = [
//   {
//     path: '',
//     element : () => 
//   }
// ]
function App() {
  return (
    <Routes>
      <Route path='/admin' element={<Admin />}>
        <Route index element={<div>test</div>} />
        <Route path='users' element={<Users />}>
          <Route index element={<List />} />
          <Route path='create' element={<CreateUser />} />
          <Route path='edit/:id' element={<EditUser />} />
        </Route>
      </Route>

      <Route path='/' element={<div>Outlet</div>} />

    </Routes>
  );
}

export default App;
