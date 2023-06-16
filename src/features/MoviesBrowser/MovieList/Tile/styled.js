import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 40px auto 0;
    padding: 16px;
    max-width: 1368px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 16px;
    }
`;

export const Image = styled.img`
    width: 292px;
    height: 434px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-right: 10px;
        width: 114px;
        height: 169px;
        left: calc(50% - 114px / 2 - 71px);
    }
`;

export const Content = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        align-items: center;
    }
`;

export const Title = styled.header`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.woodSmoke};
    margin-bottom: 24px;
    margin-top: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
        margin: 0;
    }
`;

export const SubTitle = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.darkerGrey};
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        margin: 0;
    }
`;

export const Genres = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 8px -14px 39px;
    padding-left: 0;
    color: ${({ theme }) => theme.colors.woodSmoke};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
        margin: 0 -8px;
    }
`;

export const Genre = styled.li`
    padding: 8px 16px;
    background: ${({ theme }) => theme.colors.mystic};
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;
    margin: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
        padding: 4px 8px;
    }
`;

export const StarBox = styled.div`
    width: 22px;
    height: 22px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
    }
`;

export const Rate = styled.span`
    display: flex;
    align-items: center;
`;

export const RateBig = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    margin-right: 8px;
    margin-left: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
    }
`;

export const Vouters = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.darkerGrey};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
    }
`;
