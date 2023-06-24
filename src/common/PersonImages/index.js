import { Wrapper, Poster } from "./styled";

  export const PersonImage = ({ poster }) => {
    const URL = "https://image.tmdb.org/t/p/w185";
  
    return (
      <Wrapper person>
        <Poster noPerson />
        {poster && <Poster background={`${URL}${poster}`} />}
      </Wrapper>
    );
  };