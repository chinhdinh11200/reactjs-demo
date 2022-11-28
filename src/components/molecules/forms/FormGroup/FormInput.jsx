import React from 'react';

import Label from '../../../atoms/forms/Label';
import Input from '../../../atoms/forms/Input';

export default function FormInput({
  className,
  field,
  form,
  label,
  input,
  ...props
}) {
  const { title, ...labelProps } = label;
  const type = input?.type;
  const multiple = input?.multiple;
  const { name, value, onChange, onBlur } = field;
  return (
    <div className={className} {...props}>
      {title && <Label {...labelProps}>{title}</Label>}
      {input && (
        <Input
          {...input}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          multiple={multiple}
        />
      )}
    </div>
  );
}
