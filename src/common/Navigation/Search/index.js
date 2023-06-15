import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { SearchIcon, StyledForm, StyledInput } from "./styled"

const Search = () => {
    const location = useLocation();
    const path = location.pathname;

    const changeText = () => {
        let text;
        const moviesText = "Search for movies...";
        const peopleText = "Search for people..."

        if (path === "/movies") {
            text = moviesText;
        }
        else {
            text = peopleText;
        }
        return text;
    };

    return (
        <StyledForm>
            <SearchIcon />
            <StyledInput type="text" placeholder={changeText()}></StyledInput>
        </StyledForm>

    )
};
export default Search;