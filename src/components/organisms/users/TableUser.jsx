import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import TableCell from '../../atoms/tables/TableCell';
import TableRow from '../../atoms/tables/TableRow';
import Table from '../../molecules/tables/Table';

export default function TableUser({
  children,
  className,
  thead,
  posts,
  ...props
}) {
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <Table
      className={className}
      header={
        <TableRow>
          <TableCell heading>id</TableCell>
          <TableCell heading>name</TableCell>
          <TableCell heading>selectSingle</TableCell>
          <TableCell heading>selectMulti</TableCell>
          <TableCell heading>image</TableCell>
          <TableCell heading>actions</TableCell>
        </TableRow>
      }
    >
      {posts.map((post) => (
        <TableRow key={post.id}>
          <TableCell>{post.id}</TableCell>
          <TableCell>{post.name}</TableCell>
          <TableCell>{post.selectSingle}</TableCell>
          <TableCell>{post.selectMulti.map(select => select.label)}</TableCell>
          <TableCell>{post.image}</TableCell>
          <TableCell style={{ width: '150px' }}>
            <Link
              to={`edit/${post.id}`}
              className='btn btn-sm btn-info me-2'
            >
              Edit
            </Link>
            <button
              className='btn btn-sm btn-warning'
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
