import { useEffect } from "react";
import Pagination from "../../../common/Pagination";
import MovieTile from "../../../common/MovieTile";
import { MainHeader } from "../../../common/MainHeader";
import { Container } from "../../../common/Container/styled";
import { useDispatch, useSelector } from "react-redux";
import { List, StyledLink } from "./styled";
import {
    selectStatus,
    selectTotalPages,
    selectPopularMovies,
    selectTotalResults,
    setQuery,
    selectPage,
    goToPage,
} from "./popularMoviesSlice";
import { Error }  from "../../../common/Error";
import { toMovie } from "../../../core/App/routes";
import { Loading } from "../../../common/Loading";
import { NoResult } from "../../../common/NoResult";
import { useQueryParameter } from "../../../queryParameters";
import { pageQueryParamName, searchQueryParamName } from "../../../queryParamName";

export const MovieList = () => {
    const dispatch = useDispatch();
  
    const status = useSelector(selectStatus);
    const popularMovies = useSelector(selectPopularMovies);
    const pageNumber = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);
    const totalResults = useSelector(selectTotalResults);
    const query = useQueryParameter(searchQueryParamName);
    const page = useQueryParameter(pageQueryParamName);
  
    useEffect(() => {
      dispatch(setQuery(query ? { query: query } : { query: "" }));
      dispatch(goToPage(page ? { page: page } : { page: 1 }));
    }, [query, page, dispatch]);
  
    return status === "loading" ? (
      <Loading />
    ) : status === "error" ? (
      <Error />
    ) : (
      <>
        {pageNumber > totalPages ? (
          <Error />
        ) : totalResults === 0 ? (
          <NoResult query={query} />
        ) : (
          <Container>
            <MainHeader
              title={
                query
                  ? `Search results for “${query}” (${totalResults})`
                  : `Popular Movies`
              }
            />
            <List>
              {popularMovies.map((movie) => (
                <div key={movie.id}>
                  <StyledLink to={toMovie({ movieId: movie.id })}>
                    <MovieTile
                      movie={movie}
                      id={movie.id}
                      genres={movie.genre_ids}
                    />
                  </StyledLink>
                </div>
              ))}
            </List>
            <Pagination pageNumber={pageNumber} totalPages={totalPages} />
          </Container>
        )}
        ;
      </>
    );
  };