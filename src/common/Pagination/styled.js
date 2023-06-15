import { styled } from "styled-components";
import { ReactComponent as IconLeft } from "../images/vectorLeft.svg";
import { ReactComponent as IconRight } from "../images/vectorRight.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 103px 0;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 8px;
    margin: 16.5px 0 31.5px 0;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.mystic};
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: 1s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px 12px;
    gap: 4px;
  }

  &:hover {
    filter: brightness(103%);
  }
`;

export const ButtonText = styled.span`
  font-size: 14px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.woodSmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const LeftArrow = styled(IconLeft)`
   
   @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 5px;
    height: 8px;
  }
`;

export const RightArrow = styled(IconRight)`
   
   @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 5px;
    height: 8px;
  }
`;

export const PageCounter = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 8px;
  color: ${({theme})=> theme.colors.darkerGrey};
  margin: 0 12px 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 2px;
    font-size: 10px;
    margin: 0;
  }
`;

export const PageNumber = styled.span`
  font-weight: 600;
  color: ${({theme})=> theme.colors.woodSmoke};
`;

