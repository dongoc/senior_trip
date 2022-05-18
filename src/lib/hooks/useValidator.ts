import { useState } from 'react'
import { validationScheme } from '@/lib/validator'

type FormInfo = { value: string; error: string; valid: boolean }

export const useValidator = (nameList: string[]) => {
  const initialState = nameList.reduce((state, name) => {
    return { ...state, [name]: { value: '', error: '', valid: false } }
  }, {})

  const [form, setForm] = useState<Record<string, FormInfo>>(initialState)

  const onValidate = (name: string, value: string) => {
    // 더 좋은 방법이 없을까
    if (name === 'passwordConfirm') {
      const { password } = form
      if (value === '') {
        setForm({ ...form, ...{ [name]: { value, error: '비밀번호를 다시 한번 입력해주세요', valid: false } } })
      } else if (password.value !== value) {
        setForm({ ...form, ...{ [name]: { value, error: '비밀번호가 일치하지 않습니다', valid: false } } })
      } else {
        setForm({ ...form, ...{ [name]: { value, error: '', valid: true } } })
      }
      return
    }

    if (name in validationScheme) {
      validationScheme[name as keyof typeof validationScheme]
        .validate({ [name]: value })
        .then(() => {
          setForm({ ...form, ...{ [name]: { value, error: '', valid: true } } })
        })
        .catch(({ errors }) => {
          setForm({ ...form, ...{ [name]: { value, error: errors[0], valid: false } } })
        })
    }
  }

  const isValid = Object.keys(form).every((name) => form[name].valid)

  return { form, onValidate, isValid }
}
