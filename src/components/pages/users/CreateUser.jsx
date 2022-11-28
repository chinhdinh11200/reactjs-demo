import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

import FormInput from '../../molecules/forms/FormGroup/FormInput';
import FormSelect from '../../molecules/forms/FormGroup/FormSelect';
import FormSubmit from '../../molecules/forms/FormGroup/FormSubmit';
import Block from '../../atoms/Block';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function CreateUser() {
  return (
    <Block className='card'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
          <Formik
            initialValues={{
              name: 'test',
              selectSingle: 'test',
              selectMulti: [],
              image: '',
            }}
            onSubmit={async (values) => {
              axios
                .post('https://637cf2df72f3ce38eab25455.mockapi.io/posts/posts', values)
                .then((res) => {
                })
                .catch((err) => console.log(err));
            }}
            onReset={
              () => {
                console.log('reset');
              }
            }
          >
            {(props) => {
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
                      title: 'Submit',
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
        </div>
      </div>
    </Block>
  );
}
