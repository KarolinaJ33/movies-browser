import styled, {css} from "styled-components";
import { ReactComponent as noPerson } from "../images/no-person.svg";
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
  
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-rows: auto 1fr; 
        
    }
`;

export const Wrapper = styled.div`
    height: auto;
    border-radius: 5px;
    aspect-ratio: 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    flex-basis: auto; 
    background-image: url(${noPerson});
    background-size: 100%;
    background-color: ${({ theme }) => theme.colors.silver};
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: fit-content;
    }
`;

export const Photo = styled.img`
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

export const Name = styled.div`
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    margin-top: 14px;
    color: ${({ theme }) => theme.colors.woodsmoke};
    margin: 12px 0 8px;
    

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 14px;
  }
  ${({ list }) =>
    list &&
    css`
      -webkit-line-clamp: 2;
      max-height: 2.6em;
    `}
`;


export const Person = styled.article`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 5px;
  text-align: center;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: 8px;
  }
`;
export const Role = styled.span`
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  max-height: 1.5em;
  word-break: break-all;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 13px;
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