import styled from 'styled-components';
import { CombinedButton, CombinedInput, CombinedList, CombinedSectionTitle, CombinedSelectedWrapper } from 'components/Combined/Combined';

export const WeatherListContainer = styled(CombinedList)`
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, 200px);
    gap: 18px;
  }
`;

export const WeatherTitle = styled(CombinedSectionTitle)`
  margin: 25px 0;
`;

export const SearchContainer = styled(CombinedSelectedWrapper)`
  margin-bottom: 20px;
`;

export const SearchInput = styled(CombinedInput)`
  width: 150px;

  @media (min-width: 480px) {
    width: 180px;
  }

  @media (min-width: 767px) {
    width: 380px;
  }

  @media (min-width: 1280px) {
    width: 500px;
  }
`;

export const SearchButton = styled(CombinedButton)`
  margin-left: 10px;

  @media (min-width: 767px) {
    margin-left: 10px;
  }

  @media (min-width: 1280px) {
    margin-left: 30px;
  }
`;

export const WeatherCountryandCityTitle = styled.h2`
  text-align: center;
  margin-top: 0;
  margin: 25px 0;
`;