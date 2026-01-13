import React from 'react'

export default function Button({title,onClick}) {
  return (
    <div>
      <button onClick={onClick} className='bg-red-400 rounded-md w-[200ox]'>{title}</button>
    </div>
  )
}
