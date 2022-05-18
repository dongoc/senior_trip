import { ChangeEvent, FormEvent, useState } from 'react'
import { PrimarySolidButton } from '@/components/atoms/buttons'
import { Headline2 } from '@/components/atoms/typographies'
import Header from '@/components/Header'
import { TextInput } from '@/components/inputs'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useValidator } from '@/lib/hooks/useValidator'

const FormGrid = styled.form`
  display: grid;
  grid-template-rows: 100px auto auto;
  grid-row-gap: 16px;
  align-items: center;
`

const SubmitButton = styled(PrimarySolidButton)`
  position: fixed;
  bottom: 20px;
  width: calc(100% - 40px);
`

const RegisterPage = () => {
  const navigate = useNavigate()
  const { form, onValidate, isValid } = useValidator(['username', 'email', 'password', 'passwordConfirm'])

  const onChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target
    onValidate(name, value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/trip')
  }

  return (
    <FormGrid onChange={onChange} onSubmit={onSubmit}>
      <Header title='회원가입' hasBackButton />
      <Headline2>안녕하세요, 환영합니다!</Headline2>
      <TextInput
        type='text'
        name='username'
        data-validator-key='username'
        errorText={form.username.error}
        placeholder='이름 혹은 별명'
      />
      <TextInput type='email' name='email' errorText={form.email.error} placeholder='이메일 입력' />
      <TextInput type='password' name='password' errorText={form.password.error} placeholder='비밀번호 입력' />
      <TextInput
        type='password'
        name='passwordConfirm'
        errorText={form.passwordConfirm.error}
        placeholder='비밀번호 확인'
      />
      <SubmitButton type='submit' disabled={!isValid}>
        회원가입
      </SubmitButton>
    </FormGrid>
  )
}

export default RegisterPage
