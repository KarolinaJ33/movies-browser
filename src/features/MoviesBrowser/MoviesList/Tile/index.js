import poster from "../../MoviePage/MovieTile/images/poster.png";

import {
    Container,
    Image,
    Content,
    Title,
    SubTitle,
    Box,
    Label,
    Info,
    Genres,
    Genre,
    Rate,
    RateBig,
    RateLittle,
    Vouters,
} from "./styled";
import { ReactComponent as Star } from "../../MoviePage/MovieTile/icons/Star.svg";

const Tile = () => (
    <Container>
        <Image src={poster} alt="" />
        <Content>
            <Title>Mulan</Title>
            <SubTitle>2020</SubTitle>
            <Box>
                <Label>Production:</Label>
                <Info>China, United States of America</Info>
            </Box>
            <Box>
                <Label>Release date:</Label>
                <Info>25.10.2020</Info>
            </Box>
            <Genres>
                <Genre>Action</Genre>
                <Genre>Adventure</Genre>
                <Genre>Drama</Genre>
            </Genres>
            <Rate>
                <Star />
                <RateBig>7,8</RateBig>
                <RateLittle>/ 10</RateLittle>
                <Vouters>335 votes</Vouters>
            </Rate>
        </Content>
    </Container>
);

export default Tile;
