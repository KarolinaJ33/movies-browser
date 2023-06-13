import { toMovie, toPeople } from "../../core/App/routes";
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
                    <StyledNavLink to={toMovie}>Movies</StyledNavLink>
                    <StyledNavLink to={toPeople}>People</StyledNavLink>
                </StyledDiv>
            </Container>
            <div></div>
        </StyledNavigation>
    )
};
export default Navigation;