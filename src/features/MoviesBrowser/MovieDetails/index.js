
import poster from "./images/poster.png";
import { Container, Image, Content, Title, Year } from "./styled";


const MovieTile = () => (
    <Container>
        <Image src={poster} alt=""/>
        <Content>
            <Title>Mulan</Title>
            <Year>2020</Year>
        </Content>
    </Container>
);

export default MovieTile;