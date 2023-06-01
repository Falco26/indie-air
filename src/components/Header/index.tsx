import React from "react"
import { ImageContainer, StyledHeader } from "./styled"
import logo from "../../indie_logo.png"
import { IconButton } from "../Button/IconButton"
import { EnvironmentTwoTone, SearchOutlined } from "@ant-design/icons"
import { Input } from "../Input"
import { DatePicker } from "../DatePicker"
import { Image } from "antd"

type Props = {
  datePicker?: boolean
  input?: boolean
  imgLogo?: boolean
  buttonText?: string
}

export const Header = ({ imgLogo, input, datePicker, buttonText }: Props) => {
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
              textTitle="Departure"
              iconPrefix={<EnvironmentTwoTone twoToneColor="#088808" />}
            />
            <Input
              clear
              textTitle="Arrival"
              iconPrefix={<EnvironmentTwoTone twoToneColor="#088808" />}
            />
          </>
        )}

        {datePicker && <DatePicker size="middle" />}

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
