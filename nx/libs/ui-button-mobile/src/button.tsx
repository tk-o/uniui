import * as React from 'react'
import { Button as ButtonRn, ButtonProps as ButtonPropsRn } from "react-native"

interface ButtonProps extends Omit<ButtonPropsRn, 'title'> {
  children: string
}

export function Button({ children, ...props }: ButtonProps) {
  return <ButtonRn {...props} title={children} />
}
