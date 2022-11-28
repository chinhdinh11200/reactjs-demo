import React from 'react';
import Select from 'react-select';
import Label from '../../../atoms/forms/Label';

export default function FormSelect({
  className,
  form,
  field,
  name,
  select,
  label,
  value,
  ...props
}) {
  var { title, ...labelProps } = label;
  var { options, isSearchable, isMulti, ...selectProps } = select;
  var { id, placeholder } = props;

  isMulti = isMulti ? isMulti : false;
  return (
    <div className={className} {...props}>
      {title && <Label {...labelProps}>{title}</Label>}
      <Select
        {...selectProps}
        {...field}
        id={id}
        name={name}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
        isSearchable={isSearchable}
        defaultValue={value}
        value={
          options
            ? options.find((option) => option.value === field.value)
            : value
        }
        onChange={(option) => {
          console.log(option);
          form.setFieldValue(
            field.name,
            isMulti ? option.map((item) => ({'label' : item.label, 'value' :item.value})) : option.value
          );
        }}
      />
    </div>
  );
}
