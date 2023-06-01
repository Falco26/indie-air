import { Typography, TypographyProps } from "antd"
import { TextProps } from "antd/es/typography/Text"
import { type } from "os"

import React, { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
  title?: string
  type?: TextProps["type"]
  color?: string
  bold?: boolean
}>

export const Text = ({ children, type, bold, color }: Props) => {
  return (
    <Typography.Text type={type} color={color} strong={bold}>
      {children}
    </Typography.Text>
  )
}
