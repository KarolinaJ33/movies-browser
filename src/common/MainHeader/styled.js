import styled from "styled-components";

export const StyledMainHeader = styled.h1`
    font-size: 36px;
    font-weight: 600;
    margin-top: 56px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
    margin-top: 24px;
    padding-left: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 18px;
    margin-top: 24px;
    padding-left: 24px;
  }
`;