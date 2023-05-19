import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, 135px);
  gap: 15px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fit, 180px);
    gap: 15px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, 250px);
    gap: 18px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 20px;
  }
`;

export const Item = styled.li`
  border-color: white;
  border: solid 1px white;
  border-radius: 5px;

  transition: color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover,
  &:focus {
    background: #ccaf36;
    color: #000000;
  }
`;

export const SectionTitle = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: 15px;
  font-family: Manrope;
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 15px;
  font-family: Manrope;

  font-size: 16px;
  line-height: 1.17;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 480px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  height: 100px;

  @media (min-width: 480px) {
    height: 120px;
  }

  @media (min-width: 768px) {
    height: 130px;
  }

  @media (min-width: 1280px) {
    height: 180px;
  }
`;

export const TextWrapper = styled.div`
  align-items: center;
  justify-content: center;
  padding: 10px;

  @media (min-width: 480px) {
    padding: 20px;
  }
`;

export const Select = styled.select`
  padding: 0 10px;
  text-align: center;
  font-size: 14px;
  width: 80px;
  height: 30px;
  cursor: pointer;
  color: #ffffff;
  background-color: #315330;
  border-radius: 25px;
  outline: none;
  border: none;
  margin-left: 10px;

  transition: color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover,
  &:focus {
    background: #ccaf36;
    color: #000000;
    box-shadow: 0px 8px 43px rgba(ccaf36);
  }

  &:first-child {
    margin-left: 0px;
  }

  @media (min-width: 767px) {
    width: 118px;
    height: 40px;
    border-radius: 18px;
    font-size: 18px;
    margin-left: 10px;
  }

  @media (min-width: 1280px) {
    width: 118px;
    height: 50px;
    font-size: 20px;
    border-radius: 25px;
    margin-left: 30px;
  }
`;

export const Option = styled.option`
  color: #000000;
  background-color: #315330;
`;

export const Input = styled.input`
  width: 80px;
  height: 30px;
  padding: 0 10px;
  margin-left: 10px;

  font-size: 14px;

  cursor: pointer;
  color: #ffffff;
  background-color: #315330;
  border-radius: 25px;
  outline: none;
  border: none;
  text-align: center;

  transition: color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background: #ccaf36;
    color: #000000;
    box-shadow: 0px 8px 43px rgba(ccaf36);
  }

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
    color: #000000;
  }
`;

export const SelectedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  padding: 0 10px;

  font-size: 14px;

  color: #ffffff;
  background-color: #315330;
  border-radius: 25px;
  outline: none;
  border: none;
  text-align: center;

  transition: color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover,
  &:focus {
    background: #ccaf36;
    color: #000000;
    box-shadow: 0px 8px 43px rgba(ccaf36);
    cursor: pointer;
  }

  @media (min-width: 767px) {
    width: 118px;
    height: 40px;
    border-radius: 18px;
    font-size: 18px;
  }

  @media (min-width: 1280px) {
    width: 168px;
    height: 50px;
    font-size: 20px;
    border-radius: 25px;
  }
`;
