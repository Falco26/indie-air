import React from "react"
import { ImageContainer, StyledHeader } from "./styled"
import logo from "../../images/indie_logo.png"
import { IconButton } from "../Button/IconButton"
import { EnvironmentTwoTone, SearchOutlined } from "@ant-design/icons"
import { Input } from "../Input"
import { DatePicker } from "../DatePicker"
import { Image } from "antd"
import { InputNumber } from "antd"

type Props = {
  datePicker?: boolean
  input?: boolean
  imgLogo?: boolean
  buttonText?: string
  passengers?: boolean
}

export const Header = ({
  imgLogo,
  input,
  datePicker,
  buttonText,
  passengers,
}: Props) => {
  return (
    <StyledHeader>
      {imgLogo && (
        <ImageContainer>
          <Image src={logo} preview={false} />
        </ImageContainer>
      )}
      <div style={{ display: "flex", gap: "0.5rem", alignContent: "baseline" }}>
        {input && (
          <>
            <Input
              clear
              iconPrefix={<EnvironmentTwoTone twoToneColor="#088808" />}
            />
          </>
        )}

        {datePicker && <DatePicker size="middle" />}
        {passengers && (
          <InputNumber
            placeholder="Passengers"
            min={1}
            max={15}
            style={{ alignItems: "center", display: "flex" }}
          />
        )}

        <IconButton
          iconName={<SearchOutlined />}
          variant="primary"
          size="large"
        >
          {" "}
          {buttonText}{" "}
        </IconButton>
      </div>
    </StyledHeader>
  )
}
