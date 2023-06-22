import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 1368px;
    margin: 30px auto 0;
    padding: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 320px;
        width: 100%;
        max-width: auto;
        margin: 24px auto;
    }
`;

export const Header = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.woodsmoke};
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
        margin-bottom: 12px;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(316px, 1fr));
    gap: 24px;
    grid-template-rows: 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: minmax(200px, 1fr);
  }
`;
