import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Block from '../../atoms/Block';

import Divider from '../../atoms/Divider';
import CardHeader from '../../organisms/users/CardHeader';
import TableUser from '../../organisms/users/TableUser';

export default function Users() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://637cf2df72f3ce38eab25455.mockapi.io/posts/posts')
    .then(res => {
      setPosts(res.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <Block className='card radius-15'>
      <Block className='card-body'>
        <CardHeader className='d-flex align-items-center justify-content-between' title='User table' button={{ className: 'btn btn-primary btn-sm', title: 'Create', to: 'create' }} />
        <Divider />
        <Block className='table-responsive'>
          <TableUser className='table' posts={posts} />
        </Block>
      </Block>
    </Block>
  );
}
