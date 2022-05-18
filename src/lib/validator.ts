import * as yup from 'yup'

export const emailScheme = yup.object().shape({
  email: yup.string().email('올바른 이메일 형식이 아닙니다').required('이메일을 입력해주세요'),
})

export const passwordScheme = yup.object().shape({
  password: yup
    .string()
    .min(8, '비밀번호는 8자리 이상이어야 합니다')
    .max(20, '비밀번호는 20자리 이하여야 합니다')
    .required('비밀번호를 입력해주세요'),
})

export const validationScheme = {
  email: emailScheme,
  password: passwordScheme,
}
