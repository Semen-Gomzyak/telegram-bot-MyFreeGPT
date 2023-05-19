import { CombinedButton, CombinedText } from 'components/Combined/Combined';
import styled from 'styled-components';

export const Item = styled.li`
  padding: 10px;
  border: solid 5px white;
  border-radius: 30px;
`;

export const TaskText = styled(CombinedText)``;
export const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const PriorityWrapper = styled.div`
  width: 60px;
  font-size: 16px;
  padding: 5px;
  border-radius: 15px;
  border: 1px solid white;
  margin-right: 10px;
  ${({ priority }) => priority === 'high' && 'background: #C34A36;'}
  ${({ priority }) =>
    priority === 'middle' && 'background: #FFC75F; color: #000000'}
  ${({ priority }) => priority === 'low' && 'background: #00896F;'}
`;

export const StatusWrapper = styled(PriorityWrapper)`
  width: 90px;
  ${({ status }) => status === 'to_do' && 'background: #C34A36;'}
  ${({ status }) =>
    status === 'in_progress' && 'background: #FFC75F; color: #000000'}
  ${({ status }) => status === 'done' && 'background: #00896F;'}
`;

export const DeadlineWrapper = styled.div`
  padding: 5px;
  border-radius: 15px;
  border: 1px solid white;
  width: 200px;
  background: #172636;
`;

export const IdWrapper = styled.div`
  padding: 5px;
  border-radius: 15px;
  border: 1px solid white;
  width: 94%;
  background: #172636;
  margin-bottom: 10px;
`;

export const CreatedWrapper = styled(DeadlineWrapper)`
  width: 240px;

  @media (max-width: 767px) {
    margin-right: 5px;
  }
`;

export const CreatedAndEditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleAndDescriptionWrapper = styled.div`
  padding: 10px 0;
`;

export const TaskTitle = styled.h2`
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin: 0;

  color: #ffffff;
  font-family: Manrope;
`;

export const DescriptionText = styled(CombinedText)`
  text-align: start;
  margin-top: 10px;
  font-size: 20px;
`;

export const TaskButton = styled(CombinedButton)`
  @media (max-width: 767px) {
    margin-right: 5px;
  }
`;
