import { Container } from "./ContainerPage.styled";

export const ContainerPage = ({ children, ...allProps }) => {
    return <Container {...allProps}>{ children }</Container>
} 