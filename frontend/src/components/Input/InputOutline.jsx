import React, { useEffect, useState } from 'react';
import { ErrorForField, FormControl, InputGroup, Label } from './Input.styles';

export const InputOutline = ({
  isTextarea = false,
  label,
  type = 'text',
  value,
  setValue,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    setIsFilled(Boolean(value));
  }, [value]);

  const FormControlProps = {
    as: isTextarea && 'textarea',
    isFocused: isFocused,
    isFilled: isFilled,
    type: type,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    value: value,
    onChange: setValue,
    name: label,
    error: error,
  };

  return (
    <InputGroup isFocused={isFocused} isFilled={isFilled}>
      <Label isFocused={isFocused} isFilled={isFilled} error={error}>
        {label}
      </Label>
      <FormControl {...FormControlProps} />
      {error?.msg && <ErrorForField>{error.msg}</ErrorForField>}
    </InputGroup>
  );
};
