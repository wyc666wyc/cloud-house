import React, { useState } from 'react'

export function useInput() {
  const [value, setValue] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange
  }
}