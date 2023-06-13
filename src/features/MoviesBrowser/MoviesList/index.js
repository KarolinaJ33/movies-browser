import Tile from "./Tile";
import { Container, Header, Wrapper } from "./styled"; 

const MoviesList = () => {
    return (
        <Container>
            <Header>Popular movies</Header>
            <Wrapper>
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </Wrapper>
        </Container>
    );
};

export default MoviesList;
