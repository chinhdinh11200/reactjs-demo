import React from 'react';
import Input from '../../atoms/forms/Input';
import Block from '../../atoms/Block'
import ButtonIcon from '../buttons/ButtonIcon';

export default function SearchHeader({className, onChange, ...props}) {
  return (
    <Block className={className} {...props}>
      <Input type='text' className='form-control' placeholder='search' onChange={onChange} />
      <ButtonIcon buttonClass='btn btn-search' type='button' iconClass='lni lni-search-alt'/>
    </Block>
  );
}
