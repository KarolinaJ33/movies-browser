import { toMovies, toPeople } from "../../core/App/routes";
import { Search } from "./Search";
import { Container, StyledImg, StyledMoviesBrowser, StyledDiv, StyledNavLink, StyledHeader, StyledNavigation } from "./styled";

const Navigation = () => {
    return (
        <StyledNavigation>
            <Container>
                <StyledMoviesBrowser>
                    <StyledImg />
                    <StyledHeader>Movies Browser</StyledHeader>
                </StyledMoviesBrowser>
                <StyledDiv>
                    <StyledNavLink to={toMovies}>Movies</StyledNavLink>
                    <StyledNavLink to={toPeople}>People</StyledNavLink>
                </StyledDiv>
            </Container>
            <Search />
        </StyledNavigation>
    )
};
export default Navigation;