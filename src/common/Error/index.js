import { StyledHeader, StyledImg, Wrapper, StyledText, StyledButton } from "./styled";
import { Link } from "react-router-dom";
import { toMovies } from "../../core/App/routes";

export const Error = () => {
    return (
    <Wrapper>
        <StyledImg />
        <StyledHeader>Ooops! Something went wrong... </StyledHeader>
        <StyledText>Please check your network connection and try again</StyledText>
        <Link to={toMovies()}>
        <StyledButton to={"/"}>Back to home page</StyledButton>
        </Link>
    </Wrapper>
);
};

export default Error;
