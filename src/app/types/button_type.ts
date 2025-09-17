import { ReactNode, ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>
