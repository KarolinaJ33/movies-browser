import styled from "styled-components";
import { ReactComponent as StarIcon } from "../images/star.svg";
import { ReactComponent as noPoster } from "../images/no-poster.svg";
import { Link } from "react-router-dom";

export const Tile = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.lightHeather};
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: 5px;
    padding: 16px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.lightHeather};

    &:hover {
        transform: scale(105%);
        box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.waterloo};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        grid-template-columns: auto 1fr; 
        width: 330px;
    }

`;

export const PosterWrapper = styled.div`
    height: auto;
    border-radius: 5px;
    aspect-ratio: 2 / 3;
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 5px;
    flex-basis: auto; 
    background-image: url(${noPoster});
    background-size: 100%;
    background-color: ${({ theme }) => theme.colors.silver};
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: fit-content;
    }
`;

export const Poster = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    aspect-ratio: 2/3;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: auto 1fr;
        height: fit-content;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        width: 120px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        margin-left: 8px;
        gap: 4px;
        justify-content: normal; 
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-left: 6px;
        gap: 4px;
        justify-content: normal;
    }
`;

export const Title = styled.h2`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.woodSmoke};
    margin: 16px 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size: 18px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 6px 0 0 0;
        font-size: 18px;
        line-height: 1.1;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        margin: 0 0 0 8px;
    }
`;

export const Year = styled.div`
    font-size: 16px;
    margin: 0;
    line-height: 1.5;
    margin: 8px 0 0 0px;
    color: ${({ theme }) => theme.colors.waterloo};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size: 14px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 12px;
        margin: 2px 0 0 0;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        margin: 0 0 0 8px;
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 8px 0 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 2px 0 0 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        margin: 0 0 0 8px;
    }
`;

export const Tag = styled.div`
    background-color: ${({ theme }) => theme.colors.mystic};
    padding: 6px 16px;
    border-radius: 5px;
    line-height: 1.4;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 4px 12px;
        font-size: 12px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        font-size: 10px;
        padding: 4px 8px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
        font-size: 8px;
    }
`;

export const TagName = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 4px;
  color: ${({ theme }) => theme.colors.woodsmoke};

 @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        font-size: 10px;
    }
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    margin: 8px 0 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 8px 0 0 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        margin: 6px 0 0 8px;
    }
`;

export const Star = styled(StarIcon)`
    width: 24px;
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        width: 20px;
    }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    width: 16px;
  }
`;

export const Rate = styled.div`
  font-weight: 600;
  font-size: 16px;
  padding: 0 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size: 13px;
        padding: 0 7px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        font-size: 12px;
        padding: 0 4px;
    }
`;

export const Votes = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.waterloo};
    line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.woodsmoke};
  display: block;
  height: 100%;
  &:hover article > div:first-child {
    opacity: 0.7;
  }
`;

export const Movie = styled.article`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 5px;
  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MovieDescription = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    height: auto;
    justify-content: flex-start;
  }
`;