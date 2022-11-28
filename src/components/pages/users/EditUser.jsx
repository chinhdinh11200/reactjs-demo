import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import FormInput from '../../molecules/forms/FormGroup/FormInput';
import FormSelect from '../../molecules/forms/FormGroup/FormSelect';
import FormSubmit from '../../molecules/forms/FormGroup/FormSubmit';
import Block from '../../atoms/Block';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function EditUser() {
  const [user, setUser] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://637cf2df72f3ce38eab25455.mockapi.io/posts/posts/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Block className='card'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
          {(user && user.id) && (
            <Formik
              initialValues={{
                name: user.name,
                selectSingle: user?.selectSingle,
                selectMulti: user?.selectMulti,
                image: user?.image,
              }}
              onSubmit={async (values) => {
                axios
                  .put(
                    `https://637cf2df72f3ce38eab25455.mockapi.io/posts/posts/${id}`,
                    values
                  )
                  .then((res) => {
                    console.log(res.data)
                  })
                  .catch((err) => console.log(err));
              }}
              onReset={() => {
                console.log('reset');
              }}
            >
              {(props) => {
                let { values, handleChange } = props;
                return (
                  <Form>
                    <Field
                      id='name'
                      name='name'
                      component={FormInput}
                      className='form-group my-3'
                      label={{
                        title: 'Name',
                      }}
                      input={{ className: 'form-control', type: 'text' }}
                      value={user.name}
                      onChange={handleChange}
                    />
                    <Field
                      id='selectMulti'
                      name='selectMulti'
                      component={FormSelect}
                      className='form-group my-3'
                      placeholder='placeholder'
                      label={{
                        title: 'selectMulti',
                        className: '',
                      }}
                      select={{
                        options,
                        isSearchable: true,
                        isMulti: true,
                      }}
                      value={values.selectMulti}
                    />
                    <Field
                      id='selectSingle'
                      name='selectSingle'
                      component={FormSelect}
                      className='form-group my-3'
                      placeholder='placeholder'
                      label={{
                        title: 'selectSingle',
                        className: '',
                      }}
                      select={{
                        options,
                        isSearchable: true,
                      }}
                      value={values.selectSingle}
                    />
                    <Field
                      id='image'
                      name='image'
                      component={FormInput}
                      className='form-group my-3'
                      label={{
                        title: 'Image',
                      }}
                      input={{
                        className: 'form-control',
                        type: 'file',
                      }}
                    />

                    <FormSubmit
                      className='d-flex justify-content-end mb-3'
                      submit={{
                        className: 'btn btn-danger btn-sm',
                        title: 'Update',
                      }}
                      cancel={{
                        className: 'btn btn-primary btn-sm me-2',
                        title: 'Cancel',
                      }}
                    />
                  </Form>
                );
              }}
            </Formik>
          )}
        </div>
      </div>
    </Block>
  );
}
