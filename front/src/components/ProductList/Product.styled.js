import {
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