import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { MainHeader } from "../../../common/MainHeader";
import { List, ListItem, StyledLink } from "./styled";
import { Container } from "../../../common/Container/styled";
import { PersonTile } from "../../../common/PersonTile";
import Error from "../../../common/Error";
import { Loading } from "../../../common/Loading";
import { NoResult} from "../../../common/NoResult";
import  Pagination from "../../../common/Pagination";
import { toPerson } from "../../../core/App/routes";
import {
    selectPeoplePage,
    selectPopularPeople,
    selectPopularPeopleStatus,
    selectTotalPages,
    selectTotalResults,
    goToPage,
    setQuery,
    selectCurrentPage,
    setCurrentPage
  } from "./popularPeopleSlice";
  import { useQueryParameter } from "../../../queryParameters";
  import { pageQueryParamName, searchQueryParamName } from "../../../queryParamName";

  export const PeopleList = () => {
    const dispatch = useDispatch();
    const pageNumber = useSelector(selectPeoplePage);
    const totalPages = useSelector(selectTotalPages);
    const totalResults = useSelector(selectTotalResults);
    const popularPeople = useSelector(selectPopularPeople);
    const status = useSelector(selectPopularPeopleStatus);
    const currentPage = useSelector(selectCurrentPage);

    const page = useQueryParameter(pageQueryParamName);
    const query = useQueryParameter(searchQueryParamName);

    useEffect(() => {
      dispatch(setQuery(query
        ? { query: query }
        : { query: "" }));
      dispatch(goToPage(page
        ? { currentPage: currentPage }
        : { currentPage: 1 }));
    }, [query, page, currentPage, dispatch]);


  const handleFirstPage = () => {
      dispatch(setCurrentPage(1));
  };

  const handlePrevPage = () => {
      dispatch(setCurrentPage(currentPage - 1));
  };

  const handleNextPage = () => {
      dispatch(setCurrentPage(currentPage + 1));
  };

  const handleLastPage = () => {
      dispatch(setCurrentPage(totalPages));
  };

    return (
      status === "loading" ?
    <Loading /> :
    status === "error" ?
    <Error /> :
      <>
       {pageNumber > totalPages ?
      <Error /> : totalResults === 0 ?
      <NoResult /> :
        <Container>
          <MainHeader 
            title={
              query
                ? `Search results for “${query}” (${totalResults})`
                : `Popular People`
            }/>
          <List>
            {popularPeople.map((person) => (
              <ListItem key={person.id}>
                <StyledLink to={toPerson({ personId: person.id })}>
                <PersonTile
                        id={person.id}
                        name={person.name}
                        role={person.character}
                        poster={person.profile_path}
                      />
                </StyledLink>
              </ListItem>
            ))}
          </List>
          <Pagination pageNumber={pageNumber} 
                      totalPages={totalPages} 
                      currentPage={currentPage}
                      onFirstPage={handleFirstPage}
                      onPrevPage={handlePrevPage}
                      onNextPage={handleNextPage}
                      onLastPage={handleLastPage}
            />
        </Container>
        };
      </>
    )
};