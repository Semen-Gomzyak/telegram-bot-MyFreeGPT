import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
  margin: 15px 0;
  width: 100%;
`;

export const Input = styled.input`
  padding: 0 10px;
  width: 100%;
  height: 30px;

  font-size: 14px;
  text-align: center;

  border: none;
  border-radius: 25px;
  cursor: pointer;
  color: #ffffff;
  background-color: #315330;
  outline: none;
  border: none;

  &:hover {
    background: #ccaf36;
    color: #000000;
    box-shadow: 0px 8px 43px rgba(ccaf36);
  }


  @media (min-width: 767px) {
    height: 40px;
    border-radius: 18px;
    font-size: 18px;
  }

  @media (min-width: 1280px) {

    height: 50px;
    font-size: 20px;
    border-radius: 25px;
  }
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 8px;

  @media (min-width: 480px) {
    width: 25px;
    height: 25px;
  }

  @media (min-width: 767px) {
    width: 30px;
    height: 30px;
    right: 15px;
  }
`;
