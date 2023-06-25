import {
    PosterWrapper,
    Image,
    Content,
    Title,
    SubTitle,
    Genres,
    Genre,
    Star,
    Rate,
    RateBig,
    Vouters,
    Tile
} from "./styled";
import noPoster from "../../../../common/images/noPoster.svg";

const MovieTile = ({ movie }) => {
    
    return (
        <Tile>
            <PosterWrapper>
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
            </PosterWrapper>
            <Content>
                <Title>{movie.title}</Title>
                <SubTitle>{new Date(movie.release_date).getFullYear()}</SubTitle>
                <Genres>
                    <Genre>Action</Genre>
                    <Genre>Drama</Genre>
                    <Genre>Adventure</Genre>
                </Genres>
                <Rate>
                    <Star />
                    <RateBig>{movie.vote_average}</RateBig>
                    <Vouters>{movie.vote_count} votes</Vouters>
                </Rate>
            </Content>
        </Tile>
    );
};

export default MovieTile;