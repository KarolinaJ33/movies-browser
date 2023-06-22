import styled,{ css } from "styled-components";
import person from "../images/person.svg";

export const Wrapper = styled.div`
  background-color: silver;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  aspect-ratio: 2 / 3;
  border-radius: 5px;
  transition: opacity 0.15s ease-out;

     ${({ person }) =>
    person &&
    css`
      aspect-ratio: 3 / 4;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.fullPage}px) {
    ${({ person, movieDetails }) =>
      !(person || movieDetails) &&
      css`
        margin-right: 16px;
      `}
  }
  `

export const Poster = styled.div.attrs(
    ({ background }) =>
      background && {
        style: {
          backgroundImage: `url(${background})`,
        },
      }
  )`
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;
    background-size: cover;

    ${({ background}) =>
     background && 
     css`
     animation: reveal 2.50s ease-in-out 0.75s;
     animation-fill-mode: forwards;
     opacity: 0;

  @keyframes reveal {
    100% {
      opacity: 1;
    }
  }
     `}
     
  ${({ noPerson }) =>
    noPerson &&
    css`
      background-size: 33%;
      background-image: url(${person});
      opacity: 0.6;
    `}
`;
    