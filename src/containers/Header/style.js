import styled from "styled-components";
import {Link} from "react-router-dom";

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Navbar = styled.nav`
  width: 60%;
`
export const Dropdown = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #FFECE6;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`
export const Login = styled(Link)`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #FF3D00;
  text-decoration: none;
`
export const NavLink = styled(Link)`
  font-family: Gilroy;
  font-style: normal;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`
export const More = styled.button`
  cursor: pointer;
  justify-content: center;
  background: none;
  border: none;
  align-items: center;
  display: flex;
`