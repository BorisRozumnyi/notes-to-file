import React, { useEffect, useState } from 'react';
import { ErrorForField, FormControl, InputGroup, Label } from './Text.styles';

export const TextOutline = ({ label, type = 'text', value, setValue, error }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    setIsFilled(Boolean(value));
  }, [value]);

  return (
    <InputGroup isFocused={isFocused} isFilled={isFilled}>
      <Label isFocused={isFocused} isFilled={isFilled} error={error}>
        {label}
      </Label>
      <FormControl
        isFocused={isFocused}
        isFilled={isFilled}
        type={type}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChange={setValue}
        name={label}
        error={error}
      />
      {error?.msg && <ErrorForField>{error.msg}</ErrorForField>}
    </InputGroup>
  );
};
