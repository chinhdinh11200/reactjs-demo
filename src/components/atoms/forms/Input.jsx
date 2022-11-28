import React from 'react';

export default function Input({
  className,
  name,
  id,
  type,
  value,
  placeholder,
  onChange,
  onBlur
}) {
  return (
    <input
      className={className}
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
