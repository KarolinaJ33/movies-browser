import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-rows: auto 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-gap: 0 16px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: auto;
        margin-bottom: 16px;
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
    margin-bottom: 8px;
    margin-top: 16px;

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
    margin: 0px -14px 39px;
    padding-left: 10px;
    color: ${({ theme }) => theme.colors.woodSmoke};
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
        margin: 4px -14px 39px;
    }
`;

export const Genre = styled.li`
    padding: 8px 16px;
    background: ${({ theme }) => theme.colors.mystic};
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;

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
        line-height: 130%;
    }
`;

export const Vouters = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.darkerGrey};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        line-height: 130%;
    }
`;
