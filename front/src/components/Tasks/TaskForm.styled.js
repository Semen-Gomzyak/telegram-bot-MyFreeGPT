import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { CombinedButton } from 'components/Combined/Combined';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const TaskFormList = styled.ul`
  padding: 0;
  list-style: none;
  margin-top: 0;
  margin-bottom: 15px;
`;

export const FieldStyled = styled(Field)`
  width: 240px;
  height: 30px;
  padding: 0 10px;

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
    width: 400px;
    height: 40px;
    border-radius: 18px;
    font-size: 18px;
  }

  @media (min-width: 1280px) {
    width: 600px;
    height: 50px;
    font-size: 20px;
    border-radius: 25px;
  }

  &:hover,
  &:focus {
    background: #ccaf36;
    color: #000000;
  }
`;

export const InputDiv = styled.div`
  position: relative;

  margin-bottom: 20px;

  &:last-child {
    margin: 0;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  position: absolute;
  bottom: 101%;
  left: 5%;
  font-size: 14px;
  flex-wrap: nowrap;
  color: red;
  font-style: italic;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
    left: 25%;
  }
`;

export const RadioContainer = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  margin-bottom: 20px;
  list-style: none;
  padding: 0;
`;

export const RadioButton = styled(Field)`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + label {
    color: #000000;
    background-color: #ccaf36;
    box-shadow: 0px 8px 43px rgba(204, 175, 54, 0.6);
  }
`;

export const RadioLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 20px;
  padding: 5px;

  font-size: 14px;

  color: #ffffff;
  background-color: #315330;
  border-radius: 25px;
  outline: none;
  border: none;
  text-align: center;
  margin-left: 10px;

  transition: color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:first-child {
    margin-left: 0;
  }

  &:hover,
  &:focus {
    background: #ccaf36;
    color: #000000;
    box-shadow: 0px 8px 43px rgba(204, 175, 54, 0.6);
    cursor: pointer;
  }

  @media (min-width: 767px) {
    width: 125px;
    height: 25px;
    border-radius: 18px;
    font-size: 18px;
  }

  @media (min-width: 1280px) {
    width: 190px;
    height: 30px;
    font-size: 20px;
    border-radius: 25px;
  }
`;




export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;

export const PriorityButton = styled(CombinedButton)``;

export const TextAreaInput = styled.textarea`
  width: 240px;
  height: 100px;
  padding: 10px;

  font-size: 14px;

  cursor: pointer;
  color: #ffffff;
  background-color: #315330;
  border-radius: 25px;
  outline: none;
  border: none;
  text-align: center;
  resize: none;

  transition: color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background: #ccaf36;
    color: #000000;
    box-shadow: 0px 8px 43px rgba(ccaf36);
  }

  @media (min-width: 767px) {
    width: 400px;
    height: 150px;
    border-radius: 18px;
    font-size: 18px;
  }

  @media (min-width: 1280px) {
    width: 600px;
    height: 200px;
    font-size: 20px;
    border-radius: 25px;
  }

  &:hover,
  &:focus {
    background: #ccaf36;
    color: #000000;
  }
`;
