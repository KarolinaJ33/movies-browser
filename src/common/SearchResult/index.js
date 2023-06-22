import { Container, Info, ResultList } from "./styled";


export const SearchResult = ({ title }) => {
    return (
        <Container>
            <Info>Search result for{title}</Info>
            <ResultList></ResultList>
        </Container>
    );
};