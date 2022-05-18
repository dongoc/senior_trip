import { InputHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const InputLabel = styled.label`
  font-size: 1.25rem;

  span {
    color: var(--color-blue-primary);
  }
`

const Input = styled.input`
  width: 100%;
  height: var(--input-height);
  padding: 0 var(--spacing-s);
  border: 1px solid var(--color-typography-2);
  border-radius: 8px;
  background-color: var(--color-white);
  font-size: 12px;
  outline: none;

  &::placeholder {
    color: var(--color-typography-2);
  }

  &:focus {
    border: 1px solid var(--color-primary);
  }
`

const InputError = styled.div`
  height: 15px;
  color: var(--color-warning);
  font-size: 12px;
  line-height: 15px;
`

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  labelText?: ReactNode
  inputSuffix?: ReactNode
  validator?: Function
  errorText?: ReactNode
}

export const TextInput = (props: TextInputProps) => {
  const { labelText, errorText, validator, ...inputProps } = props
  return (
    <InputWrapper>
      {labelText ? <InputLabel>{labelText}</InputLabel> : null}
      <Input {...inputProps} />
      {errorText ? <InputError>{errorText}</InputError> : null}
    </InputWrapper>
  )
}

export default TextInput
