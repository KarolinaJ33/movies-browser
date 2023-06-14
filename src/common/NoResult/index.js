import { Wrapper, NoResultIcon } from "./styled";
import { Container } from "../Container/styled";
import { MainHeader } from "../MainHeader";

export const NoResult = ({query}) => (
    <Container>
        <MainHeader title={`Sorry, there are no results for "${query}"`} />
        <Wrapper>
            <NoResultIcon/>
        </Wrapper>
    </Container>
);