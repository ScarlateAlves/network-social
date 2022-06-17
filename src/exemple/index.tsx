import { forwardRef } from 'react'

interface SearchProps {
  placeholder?: string
  name?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchAccounts = forwardRef(
  ({ placeholder, name, value, onChange }: SearchProps, ref) => {
    return (
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        {...ref}
      />
    )
  }
)

SearchAccounts.displayName = 'SearchAccounts'

import axios from 'axios'

export default function IndexPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const formData = new FormData()
    formData.append('nome', JSON.stringify('nome'))
    formData.append('peso', JSON.stringify('peso'))
    formData.append('idade', JSON.stringify('idade'))
    formData.append('profile_picture', e.target.files[0])
    //   axios.put('api/photo', formData).then(console.log).catch(console.log)
  }
  return <input accept="*" type="file" onChange={handleChange} />
}
