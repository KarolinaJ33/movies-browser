import { useLocation } from "react-router-dom";
import { useQueryParameter, useReplaceQueryParameter } from "../../../queryParameters";
import { pageQueryParamName, searchQueryParamName } from "../../../queryParamName";
import { SearchIcon, StyledForm, StyledInput, Wrapper } from "./styled";

export const Search = () => {
    const replaceQueryParameter = useReplaceQueryParameter();
    const query = useQueryParameter(searchQueryParamName);
    const location = useLocation();

    const onInputChange = ({ target }) => {
        replaceQueryParameter([
          {
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
          },
          {
            key: pageQueryParamName,
            value: 1,
          },
        ]);
      };
    
      return (
        <Wrapper>
          <StyledForm>
            <SearchIcon />
          <StyledInput
            onChange={onInputChange}
            value={query || ""}
            placeholder={`${
              location.pathname.includes("movie")
                ? "Search for movies..."
                : "Search for people..."
            }`}
          />
          </StyledForm>
          </Wrapper>
      );
    };