import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  margin: 0;
  justify-content: center;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    grid-gap: 16px;
    margin: 12px auto 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    grid-gap: 16px;
    margin: 12px auto 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 16px;
    margin: 12px auto 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.woodsmoke};
`;
