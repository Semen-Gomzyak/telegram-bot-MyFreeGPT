import { CombinedList } from "components/Combined/Combined";
import styled from "styled-components";

export const ListTasks = styled(CombinedList)`
  padding: 5px;
  grid-template-columns: repeat(auto-fit, 350px);

  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fit, 420px);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, 700px);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, 1200px);
  }
`;