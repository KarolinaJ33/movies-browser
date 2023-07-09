import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  margin: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
    margin: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 16px;
  }
`;

export const Wrapper = styled.div`
  margin: 0px auto;
  max-width: 1368px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px ,1fr));
  grid-gap: 24px;
  justify-content: center;
  padding: 0;
 

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(162px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

export const Bottom = styled.div`
    margin-top: 55px;
`;