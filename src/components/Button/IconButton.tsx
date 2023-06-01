import { Button as AntButton, ButtonProps } from "antd"
import { PropsWithChildren, ReactNode } from "react"

type Props = PropsWithChildren<{
  variant?: ButtonProps["type"]
  shape?: ButtonProps["shape"]
  size?: ButtonProps["size"]
  danger?: boolean
  iconColor?: string
  iconName?: ReactNode
  onClick?: () => void
}>

export const IconButton = ({
  children,
  variant,
  size,
  shape,
  danger,
  iconColor,
  iconName,
  onClick,
}: Props) => {
  return (
    <>
      <AntButton
        icon={iconName}
        shape={shape}
        size={size}
        color={iconColor}
        danger={danger}
        type={variant}
        onClick={onClick}
      >
        {children}
      </AntButton>
    </>
  )
}
