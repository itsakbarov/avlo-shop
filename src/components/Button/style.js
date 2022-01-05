import styled from 'styled-components'

export const StyledButton = styled.button`
  background: #FF3D00;
  border-radius: 5px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  padding: 12px 27px;
  line-height: 20px;
  border: none;
  color: #FFFFFF;
  position: relative;

  &:before {
    content: "";
    left: 5px;
    bottom: -6px;
    position: absolute;
    background: transparent;
    border: 3px solid #FF3D00;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
`