import React, { FC } from 'react'

import IButton from './Button.type'

const Button: FC<IButton> = ({ label }) => {
  return (
    <button className=''>
      <span className=''>{label}</span>
    </button>
  )
}

export default Button
