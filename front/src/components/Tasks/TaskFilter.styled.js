import { CombinedSelect } from 'components/Combined/Combined';
import { SelectedWrapper } from 'components/Combined/Combined.styled';
import styled from 'styled-components';

export const FilterSelect = styled(CombinedSelect)`
  width: 120px;

  @media (min-width: 768px) {
    width: 140px;
  }

  @media (min-width: 1280px) {
    width: 160px;
  }
`;

export const TaskControlsWrapper = styled(SelectedWrapper)`
margin-bottom: 10px;
`