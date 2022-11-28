import React from 'react';
import Block from '../../../atoms/Block';
import Button from '../../../atoms/Button';

export default function FormSubmit({ className, cancel, submit, ...props }) {
  const submitTitle = submit?.title;
  const cancelTitle = cancel?.title;

  return (
    <Block className={className}>
      {cancelTitle && <Button {...cancel}>{cancelTitle}</Button>}
      {submitTitle && <Button {...submit}>{submitTitle}</Button>}
    </Block>
  );
}
