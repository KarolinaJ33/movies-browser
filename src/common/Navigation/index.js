import { toMovies, toPeople } from "../../core/App/routes";
import { Search } from "./Search";
import {
    Container,
    StyledImg,
    StyledMoviesBrowser,
    StyledDiv,
    StyledNavLink,
    StyledHeader,
    StyledNavigation,
    StyledLink,
} from "./styled";

const Navigation = () => {
    return (
        <StyledNavigation>
            <Container>
                <StyledMoviesBrowser>
                    <StyledImg />
                    <StyledLink to={toMovies}>
                        <StyledHeader>Movies Browser</StyledHeader>
                    </StyledLink>
                </StyledMoviesBrowser>
                <StyledDiv>
                    <StyledNavLink to={toMovies}>Movies</StyledNavLink>
                    <StyledNavLink to={toPeople}>People</StyledNavLink>
                </StyledDiv>
            </Container>
            <Search />
        </StyledNavigation>
    );
};
export default Navigation;
