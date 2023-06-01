import React from "react"
import { DatePicker as AntDate, DatePickerProps } from "antd"

type Props = {
  size?: DatePickerProps["size"]
}

export const DatePicker = ({ size }: Props) => {
  return <AntDate.RangePicker size={size} />
}
