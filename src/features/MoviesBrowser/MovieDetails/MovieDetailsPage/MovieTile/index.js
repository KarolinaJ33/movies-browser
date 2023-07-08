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
    Wrapper,
} from "./styled";
import { ReactComponent as Star } from "../../../../../common/images/star.svg";

export const MovieTile = ({ poster_path, title, release, production, genres, rate, votes, details }) => {

    return (
        <Wrapper>
            <Container>
                <Image src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt="" />
                <Content>
                    <Title>{title}</Title>
                    <SubTitle>{release.slice(0, 4)}</SubTitle>
                    <Box>
                        <Label>Production:</Label>
                        <Info>{production.map((country) => country.name).join(", ")}</Info>
                    </Box>
                    <Box>
                        <Label>Release date:</Label>
                        <Info>{release.split("-").reverse().join(".")}</Info>
                    </Box>
                    <Genres>
                        {genres.map((genre) => (
                            <Genre key={genre.id}>{genre.name}</Genre>
                        ))}
                    </Genres>
                    <Rate>
                        <Star />
                        <RateBig>{rate.toFixed(1)}</RateBig>
                        <RateLittle>/ 10</RateLittle>
                        <Vouters>{votes} votes</Vouters>
                    </Rate>
                </Content>
                <Desription>{details}</Desription>
            </Container></Wrapper>

    );
};