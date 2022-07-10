import React from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = ({setProductSearch}) => {

  const { handleSubmit, reset, register } = useForm()

  const changeInputText = (e) => {
    setProductSearch(e.target.value)
  }

  const submit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form-home'>
      <input 
        className='form-input'
        type="text" 
        // {...register('searchText')} 
        onChange={changeInputText}
        placeholder="Search ..." 
      />
      <button className='form-button'><i class='bx bx-search-alt-2'></i></button>
    </form>
  )
}

export default InputSearch