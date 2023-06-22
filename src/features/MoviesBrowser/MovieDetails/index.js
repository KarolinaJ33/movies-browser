import poster from "./images/poster.png";
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
    Desription,
} from "./styled";
import { ReactComponent as Star } from "../../../common/images/Star.svg";

const MovieDetails = () => (
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
            <Desription>
                A young Chinese maiden disguises herself as a male warrior in
                order to save her father. Disguises herself as a male warrior in
                order to save her father. A young Chinese maiden disguises
                herself as a male warrior in order to save her father.
            </Desription>
        </Content>
    </Container>
);

export default MovieDetails;