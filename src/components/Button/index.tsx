import { Button as AntButton, ButtonProps } from "antd"

import React, { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
  color?: ButtonProps["color"]
  variant?: ButtonProps["type"]
  onClick?: () => void
}>

export const Button = ({ color, children, variant, onClick }: Props) => {
  return (
    <>
      <AntButton color={color} type={variant} onClick={onClick}>
        {children}
      </AntButton>
    </>
  )
}
