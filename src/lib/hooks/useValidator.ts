import { useState } from 'react'
import { validationScheme } from '@/lib/validator'

type FormInfo = { error: string; valid: boolean }

export const useValidator = (nameList: string[]) => {
  const initialState = nameList.reduce((state, name) => {
    return { ...state, [name]: { error: '', valid: false } }
  }, {})

  const [form, setForm] = useState<Record<string, FormInfo>>(initialState)

  const onValidate = (name: string, value: string) => {
    if (name in validationScheme) {
      validationScheme[name as keyof typeof validationScheme]
        .validate({ [name]: value })
        .then(() => {
          setForm({ ...form, ...{ [name]: { error: '', valid: true } } })
        })
        .catch(({ errors }) => {
          setForm({ ...form, ...{ [name]: { error: errors[0], valid: false } } })
        })
    }
  }

  const isValid = Object.keys(form).every((name) => form[name].valid)

  return { form, onValidate, isValid }
}
