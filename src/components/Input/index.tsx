import React from "react"
import { Input as AntInput } from "antd"
import { Text } from "../Text"
import Icon from "@ant-design/icons/lib/components/Icon"
import { DingtalkOutlined, EnvironmentTwoTone } from "@ant-design/icons"

type Props = {
  clear?: boolean
  textTitle?: string
  iconPrefix?: React.ReactNode
}

export const Input = ({ clear, textTitle, iconPrefix }: Props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "center",
          flexDirection: "column",
          opacity: 1,
        }}
      >
        <AntInput
          allowClear={clear}
          prefix={iconPrefix}
          placeholder={textTitle}
          size="large"
        />
      </div>
    </>
  )
}
