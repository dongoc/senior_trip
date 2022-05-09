import { FixedButton as SubmitButton } from '@/components/atoms/buttons'
import { Heading2, HelpLink } from '@/components/atoms/typographies'
import { TextInput } from '@/components/inputs'
import styled from 'styled-components'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const LoginPage = () => {
  return (
    <>
      <Heading2>로그인</Heading2>
      <FormWrapper>
        <TextInput
          type='email'
          labelText={
            <p>
              <span>이메일</span>을 입력해주세요
            </p>
          }
          errorText='잘못된 이메일 형식입니다'
          placeholder='korea@email.com'
        />
        <TextInput
          type='password'
          labelText={
            <p>
              <span>비밀번호</span>를 입력해주세요
            </p>
          }
          errorText='비밀번호를 입력해주세요'
        />
        <SubmitButton type='submit'>로그인하기</SubmitButton>
      </FormWrapper>
      <HelpLink to='forgot-password'>비밀번호를 잊어버리셨나요?</HelpLink>
    </>
  )
}

export default LoginPage
