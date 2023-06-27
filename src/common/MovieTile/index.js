import { Tile, Poster, Content, Title, Year, Tags, Tag, TagName, Rating, Star, Rate, Votes, PosterWrapper } from "./styled";
import { IMG_URL } from "../../core/App/apiCodes";
import { Genres } from "../../features/MoviesBrowser/Genres";
import noPoster from "../images/no-poster.svg";

export const MovieTile = ({ movie, genres }) => {
    const genresMovie = Genres.filter((genre) => genres.includes(genre.id));
    return (
        <Tile>
            <PosterWrapper>
                {movie.poster_path ? (
                    <Poster src={`${IMG_URL}${movie.poster_path}`} alt="movie poster" />
                ) : (
                    <img src={noPoster} alt="poster in not available" />
                )}

            </PosterWrapper>
            <Content>
                <Title>{movie.title}</Title>
                <Year>{movie.release_date.slice(0, 4)}</Year>
                <Tags>
                    {genres ? genresMovie.map((genre) => (
                        <Tag key={genre.id}>
                            <TagName>{genre.name}</TagName>
                        </Tag>
                    )) : null}
                </Tags>
                <Rating>
                    <Star />
                    <Rate>{movie.vote_average.toFixed(1)}</Rate>
                    <Votes>{movie.vote_count} votes</Votes>
                </Rating>
            </Content>
        </Tile>
    );
};

export default MovieTile;