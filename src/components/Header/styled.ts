import styled from "@emotion/styled"

export const StyledHeader = styled.div`
  width: 1200px;
  background-color: white;
  height: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  position: absolute;
  z-index: 999;
  top: 40px;
  border-radius: 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  opacity: 0.95;
  :hover {
    opacity: 1;
    transform: scale(1.03);
    transition: 0.2s;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  width: 130px;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 120px;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`
