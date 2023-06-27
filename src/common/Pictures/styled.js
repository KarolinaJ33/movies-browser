import styled, { css } from "styled-components";
import camera from "../images/camera.svg";
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

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      width: 312px;
      grid-row: span 2;

      @media (max-width: ${({ theme }) => theme.breakpoint.fullPage}px) {
        width: 215px;
      }
      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 114px;
      }
    `}

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
`;

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

  ${({ background }) =>
    background &&
    css`
      animation: reveal 2.5s ease-in-out 0.75s;
      animation-fill-mode: forwards;
      opacity: 0;

      @keyframes reveal {
        100% {
          opacity: 1;
        }
      }
    `}
  ${({ noMovie }) =>
    noMovie &&
    css`
      background-size: 50%;
      background-image: url(${camera});
      opacity: 0.6;
    `}

  ${({ noPerson }) =>
    noPerson &&
    css`
      background-size: 33%;
      background-image: url(${person});
      opacity: 0.6;
    `}
`;