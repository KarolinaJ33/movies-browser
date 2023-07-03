import {
    PosterWrapper,
    Image,
    Content,
    Title,
    SubTitle,
    Star,
    Rate,
    RateBig,
    Vouters,
    Tile,
    GridItem
} from "./styled";
import noPoster from "../../../../common/images/noPoster.svg";
import { GenresDetails } from "../../Genres";

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
                <GridItem>
                <Title>{movie.title}</Title>
                <SubTitle>{new Date(movie.release_date).getFullYear()}</SubTitle>
                <GenresDetails genres={movie.genre_ids}></GenresDetails>
                </GridItem>
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