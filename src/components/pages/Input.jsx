import React from 'react'

export default function Input({type='text',id,name,title,onChange,value,errors,onBlur,touched}) {
  const showError = touched[name] && errors[name];

  return (
    <>
    <div className='input-group my-4 d-block m-auto w-50 '>
    <label htmlFor={id}>{title}</label>
        <input className='form-control w-100' type={type} id={id} name={name} value={value} onChange={onChange} onBlur={onBlur}/>
       
       {showError&& <p className='text-danger'>{errors[name]}</p>}
    </div>
    </>
  )
}
