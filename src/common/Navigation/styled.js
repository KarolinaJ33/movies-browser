import { styled } from "styled-components";
import { ReactComponent as Icon } from "../images/Video.svg";
import { NavLink } from "react-router-dom"

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.woodSmoke};
  height: 94px;
  gap: 21px;
  padding: 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
  height:142px;
  display: grid;
  gap: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 520px;
  gap: 12px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
  margin-top: 14px;
  }
`;

export const StyledMoviesBrowser = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledImg = styled(Icon)`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.navigation.smallPage}px) {
  width: 17px;
  height: 17px;
  }
`;

export const StyledHeader = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  text-transform: capitalize;

  @media (max-width: ${({ theme }) => theme.breakpoint.navigation.smallPage}px) {
    font-size: 13px;
    line-height: 130%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  max-width: 1218px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  line-height: 21px;
  padding: 14px 24px;
  background-color: ${({ theme }) => theme.colors.woodSmoke};
  text-transform: uppercase;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.navigation.smallPage}px) {
    font-size: 12px;
    padding: 8px 12px;
  }

  &:hover {
      filter: brightness(90%);
  }

  &.active {
      outline: 1px solid ${({ theme }) => theme.colors.white};
      border-radius: 24px;
  }  
`;


