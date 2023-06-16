import poster from "../../MoviePage/MovieTile/images/poster.png";

import {
    Container,
    Image,
    Content,
    Title,
    SubTitle,
    Genres,
    Genre,
    StarBox,
    Rate,
    RateBig,
    Vouters,
} from "./styled";
import { ReactComponent as Star } from "../../MoviePage/MovieTile/icons/Star.svg";

const Tile = () => (
    <Container>
        <Image src={poster} alt="" />
        <Content>
            <Title>Mulan</Title>
            <SubTitle>2020</SubTitle>
            <Genres>
                <Genre>Action</Genre>
                <Genre>Drama</Genre>
                <Genre>Adventure</Genre>
            </Genres>
            <Rate>
                <StarBox>
                <Star />
                </StarBox>
                <RateBig>7,8</RateBig>
                <Vouters>35 votes</Vouters>
            </Rate>
        </Content>
    </Container>
);

export default Tile;