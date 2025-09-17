import React from 'react'
import { ButtonProps } from '../types/button_type'

export function Button({
  children,
  className = '',
  onClick,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full md:w-auto
        px-4 md:px-6 py-2
        text-sm md:text-base
        rounded-md text-white
        bg-blue-500 hover:bg-blue-600
        disabled:bg-gray-400 disabled:cursor-not-allowed
        transition-colors duration-200
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
