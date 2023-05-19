import { CombinedText } from 'components/Combined/Combined';
import styled from 'styled-components';

export const TaskCounterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TaskCounterText = styled(CombinedText)`
  text-align: start;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;
