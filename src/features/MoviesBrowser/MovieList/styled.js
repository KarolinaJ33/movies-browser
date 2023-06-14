import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 1368px;
    margin: 40px auto 0;
    

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 320px;
        width: 100%;
    }
`;

export const Header = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
        margin-bottom: 12px;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 16px;
  }
`;