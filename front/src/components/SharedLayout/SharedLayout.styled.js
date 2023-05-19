import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 12px;
  padding: 5px 10px;
  border-bottom: 1px solid white;

  > nav {
    display: flex;
  }

  @media (min-width: 768px) {
    padding: 10px 10px;
    gap: 15px;
  }

  @media (min-width: 1280px) {
    padding: 15px 15px;
    gap: 20px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.04em;
  text-decoration: none;
  width: 88px;
  height: 36px;
  border-radius: 12px;
  text-align: center;

  background: #315330;
  font-family: Manrope;
  color: white;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  margin-left: 5px;

  @media (min-width: 767px) {
    width: 118px;
    height: 40px;
    border-radius: 18px;
    font-size: 18px;
    margin-left: 10px;
  }

  @media (min-width: 1280px) {
    width: 168px;
    height: 50px;
    font-size: 20px;
    border-radius: 25px;
    margin-left: 30px;
  }

  &:hover,
  &:focus {
    background: #ccaf36;
    color: black;
  }
`;
