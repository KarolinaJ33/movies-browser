import styled from "styled-components";
import { ReactComponent as noPoster } from "../../../../common/images/no-poster.svg";
import { ReactComponent as StarIcon } from "../../../../common/images/star.svg";

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

export const Image = styled.img`
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.woodSmoke};
  margin: 16px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    margin: 0 0 0 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 6px 0 0 0;
    font-size: 18px;
    line-height: 1.1;
  }
`;

export const SubTitle = styled.div`
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.darkerGrey};

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


export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0 0 0;
  padding: 0;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 2px 0 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    margin: 0 0 0 8px;
  }
`;

export const Genre = styled.div`
  background-color: ${({ theme }) => theme.colors.mystic};
  padding: 8px 16px;
  border-radius: 5px;
  line-height: 1.4;
  align-items: center;
  display: flex;
  font-size: 13px;
  

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 4px 12px;
    font-size: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

export const Star = styled(StarIcon)`
  width: 24px;
  display: flex;
    align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    width: 16px;
  }
`;

export const Rate = styled.div`
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

export const RateBig = styled.div`
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
  color: ${({ theme }) => theme.colors.darkerGrey};
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 10px;
    line-height: 1.3;
  }
`;

export const Vouters = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkerGrey};
  font-weight: 400;
  display: flex;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

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
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr 1fr;
    gap: 0 16px;
    padding: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    grid-template-columns: auto 1fr;
    width: 300px;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lighGrey};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;