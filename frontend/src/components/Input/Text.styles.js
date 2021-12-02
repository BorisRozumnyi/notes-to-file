import styled from 'styled-components';

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: ${({ theme }) =>
      theme.spacing.sm}
    0;
  align-items: stretch;
  width: 100%;
  padding-bottom: ${({ theme }) =>
    theme.spacing.sm};
`;

export const FormControl = styled.textarea`
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4rem;
  color: ${({ theme }) =>
    theme.color.primary};
  background-color: transparent;
  background-clip: padding-box;
  appearance: none;
  border-radius: ${({ theme }) =>
    theme.spacing.xxxs};
  transition: 0.2s ease;
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;

  border: ${({ theme }) =>
      theme.borderWidth.normal}
    solid
    ${({ error, theme }) =>
      error
        ? theme.color.red
        : '#d2d6da'};
  border-radius: ${({ theme }) =>
    theme.spacing.xxxs};
  padding: ${({ theme }) =>
    `${theme.spacing.xxs} ${theme.spacing.xs} !important;`};

  :focus {
    background-color: transparent;
    border-color: transparent;
    outline: 0;
    box-shadow: inset 1px 0
        ${({ theme, error }) =>
          error ? theme.color.red : theme.color.primary},
      inset -1px 0 ${({ theme, error }) => error ? theme.color.red : theme.color.primary},
      inset 0 -1px ${({ theme, error }) => error ? theme.color.red : theme.color.primary};
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    transition: background-color 5000s
      ease-in-out 0s;
  }

  ${({
    isFocused,
    isFilled,
    theme,
    error,
  }) =>
    (isFocused || isFilled) &&
    `
      border-color: ${
        error
          ? theme.color.red
          : theme.color.primary
      } !important;
      border-top-color: transparent !important;
  `}
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: #7b809a;
  margin-left: 0.25rem;
  position: absolute;
  top: 0.6125rem;
  margin-left: 0;
  transition: 0.2s ease all;

  display: flex;
  line-height: 3.925 !important;
  top: -${({ theme }) => theme.spacing.xxxs};
  margin-bottom: 0;
  text-transform: capitalize;
  &:before {
    content: '';
    margin-right: 4px;
    border-left: solid 1px transparent;
    border-radius: 4px 0;
  }
  &:after {
    content: '';
    flex-grow: 1;
    margin-left: 4px;
    border-right: solid 1px transparent;
    border-radius: 0 5px;
  }
  &:before,
  &:after {
    content: '';
    border-top: solid;
    pointer-events: none;
    margin-top: ${({ theme }) =>
      theme.spacing.xxxs};
    box-sizing: border-box;
    display: block;
    height: 0.5rem;
    width: ${({ theme }) =>
      theme.spacing.xxs};
    border-width: ${({ theme }) =>
        theme.borderWidth.normal}
      0 0;
    border-color: transparent;
  }
  ${({
    isFocused,
    isFilled,
    theme,
    error,
  }) =>
    (isFocused || isFilled) &&
    `
    width: 100%;
    height: 100%;
    font-size: ${
      theme.spacing.xxs
    } !important;
    color: ${
      error
        ? theme.color.red
        : theme.color.primary
    };
    display: flex;
    line-height: 1.25 !important;
    :before, :after {
      border-top-color: ${
        error
          ? theme.color.red
          : theme.color.primary
      };
      
    `}
  ${({ isFocused, theme, error }) =>
    isFocused &&
    `box-shadow: 0px -1px 0px 0px ${error ? theme.color.red : theme.color.primary}`}
`;

export const ErrorForField = styled.p`
  color: ${({ theme }) =>
    theme.color.red};
  position: absolute;
  bottom: 0;
  padding: 0 12px;
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 14px;
`;
