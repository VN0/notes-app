import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import TextArea from 'components/TextArea';
import { rgba } from 'utils/style';
import { useId } from 'hooks';

function Input(props) {
  const { id, label, hasValue, multiline, className, ...restProps } = props;
  const [focused, setFocused] = useState(false);
  const generatedId = useId();
  const inputId = id || `input-${generatedId}`;

  return (
    <InputWrapper className={className}>
      <InputLabel
        id={`${inputId}-label`}
        hasValue={!!props.value}
        htmlFor={inputId}
        focused={focused}
      >
        {label}
      </InputLabel>
      <InputElement
        as={multiline ? TextArea : undefined}
        id={inputId}
        aria-labelledby={`${inputId}-label`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...restProps}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  position: relative;
  display: flex;
`;

const InputElement = styled.input`
  background: transparent;
  color: ${props => props.theme.colorText};
  transition: background-color 5000s linear 0s;
  width: 100%;
  font-size: 16px;
  font-family: inherit;
  margin: 0;
  border: 0;
  padding: 24px 0 16px;
  z-index: 16;
  appearance: none;
  border-radius: 0;
  line-height: 1.4;
  overflow-x: hidden;

  @media (prefers-reduced-motion: reduce) {
    #root & {
      transition: background-color 5000s linear 0s;
    }
  }

  &:focus {
    outline: none;
  }

  &::-webkit-contacts-auto-fill-button:hover {
    background-color: ${props => props.theme.colorPrimary};
  }
`;

const InputLabel = styled.label`
  color: ${props => rgba(props.theme.colorText, 0.8)};
  position: absolute;
  top: 26px;
  left: 0;
  display: block;
  transform-origin: top left;
  transition: transform 0.4s ${props => props.theme.curveFastoutSlowin}, color 0.4s ease;

  ${props => (props.hasValue || props.focused) && css`
    color: ${rgba(props.theme.colorText, 0.54)};
    transform: scale(0.8) translateY(-28px);
  `}
`;

export default Input;
