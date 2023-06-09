import { Container, StyledImg, StyledMoviesBrowser, StyledDiv, StyledLink, StyledHeader, StyledNavigation } from "./styled";

const Navigation = () => {
    return (
        <StyledNavigation>
            <Container>
                <StyledMoviesBrowser>
                    <StyledImg />
                    <StyledHeader>Movies Browser</StyledHeader>
                </StyledMoviesBrowser>
                <StyledDiv>
                    <StyledLink>Movies</StyledLink>
                    <StyledLink>People</StyledLink>
                </StyledDiv>
            </Container>
            <div></div>
        </StyledNavigation>
    )
};
export default Navigation;