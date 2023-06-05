import React from "react"
import { Input as AntInput } from "antd"
import { Text } from "../Text"
import Icon from "@ant-design/icons/lib/components/Icon"
import {
  CloseOutlined,
  DingtalkOutlined,
  EnvironmentTwoTone,
} from "@ant-design/icons"
import useSelection from "antd/es/table/hooks/useSelection"
import { selectArrival, selectDeparture } from "../../features/search/selectors"
import { useDispatch, useSelector } from "react-redux"
import { searchActions } from "../../features/search/reducer"
import { IconButton } from "../Button/IconButton"

type Props = {
  clear?: boolean
  textTitle?: string
  iconPrefix?: React.ReactNode
}

export const Input = ({ clear, textTitle, iconPrefix }: Props) => {
  const dispatch = useDispatch()
  const departure = useSelector(selectDeparture)
  const arrival = useSelector(selectArrival)

  const handleDepartureRemove = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value)
    dispatch(searchActions.removeDeparture())
  }
  const handleArrivalRemove = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value)
    dispatch(searchActions.removeArrival())
  }

  console.log(departure, "departure")

  console.log(arrival, "arrival")

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "center",
          flexDirection: "row",
          opacity: 1,
          columnGap: "10px",
        }}
      >
        <AntInput
          allowClear={clear}
          prefix={iconPrefix}
          placeholder="Departure"
          size="large"
          defaultValue={""}
          value={departure ?? ""}
          onChange={handleDepartureRemove}
        />

        <AntInput
          allowClear={clear}
          prefix={iconPrefix}
          placeholder="Arrival"
          size="large"
          value={arrival ?? ""}
          onChange={handleArrivalRemove}
        />
      </div>
    </>
  )
}
