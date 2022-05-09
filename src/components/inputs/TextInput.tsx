import { InputHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`

const InputLabel = styled.label`
  font-size: 1.25rem;

  span {
    color: var(--color-blue-primary);
  }
`

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-xxs);
  border: none;
  border-bottom: 2px solid var(--color-black);
  background-color: transparent;
  font-size: 1.5rem;
  outline: none;

  &::placeholder {
    color: var(--color-grey-primary);
  }

  &:focus {
    border-bottom: 2px solid var(--color-blue-primary);
  }

  &:invalid {
    border-bottom: 2px solid var(--color-red-primary);
  }
`

const InputError = styled.div`
  color: var(--color-red-primary);
  font-size: 1rem;
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
      {labelText && <InputLabel>{labelText}</InputLabel>}
      <Input {...inputProps} />
      <InputError>{errorText}</InputError>
    </InputWrapper>
  )
}

export default TextInput
