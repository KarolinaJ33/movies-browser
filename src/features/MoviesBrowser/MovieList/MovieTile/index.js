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
import { ReactComponent as Star } from "../../../../common/images/star.svg";
import noPoster from "../../../../common/images/noPoster.svg";

const MovieTile = ({ movie }) => {
    
    return (
        <Container>
            {movie.poster_path ? (
                <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="poster"
                />
            ) : (
                <Image
                src={noPoster}
                alt="does not have a poster"
                />
            )}
            <Content>
                <Title>{movie.title}</Title>
                <SubTitle>{new Date(movie.release_date).getFullYear()}</SubTitle>
                <Genres>
                    <Genre>Action</Genre>
                    <Genre>Drama</Genre>
                    <Genre>Adventure</Genre>
                </Genres>
                <Rate>
                    <StarBox>
                        <Star />
                    </StarBox>
                    <RateBig>{movie.vote_average}</RateBig>
                    <Vouters>{movie.vote_count} votes</Vouters>
                </Rate>
            </Content>
        </Container>
    )
};

export default MovieTile;