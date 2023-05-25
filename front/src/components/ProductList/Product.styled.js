import {
  CombinedButton,
  CombinedImagesWrapper,
  CombinedItem,
  CombinedList,
  CombinedText,
  CombinedTextWrapper,
} from 'components/Combined/Combined';
import styled from 'styled-components';

export const ProductsListWrapper = styled(CombinedList)`
  grid-template-columns: repeat(auto-fit, 300px);
  padding: 10px;
  gap: 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 16px;
  }
`;

export const ProductItem = styled(CombinedItem)`
  min-height: 300px;

  > a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    height: 450px;
  }
`;

export const TextWrapper = styled(CombinedTextWrapper)`
  padding: 10px;
`;

export const ProductName = styled.h2`
  text-align: center;
  justify-content: center;
  align-items: center;

  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;

  color: #ffffff;
  font-family: Manrope;
`;

export const ImagesWrapper = styled(CombinedImagesWrapper)`
  min-height: 250px;

  @media (min-width: 768px) {
    height: 300px;
  }
`;

export const ImagesDetailWrapper = styled(CombinedImagesWrapper)`
  min-width: 350px;
  min-height: 350px;

  @media (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
`;

export const ProductSectionTitle = styled.h3`
  font-size: 20px;
  margin: 15px 0 0 0;
  font-family: Manrope;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const CharacteristicsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ProductDetailsText = styled(CombinedText)`
  text-align: left;
  margin: 5px 0 0 0;
`;

export const AddProductButton = styled(CombinedButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  margin: 0 auto;

  font-size: 18px;
`;

export const BuyLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  padding: 0 10px;
  margin: 0 auto;

  font-size: 18px;

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

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
}`;