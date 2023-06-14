import styled from "styled-components";

export const Container = styled.div`
    max-width: 1368px;
    display: grid;
    grid-template-columns: auto 1fr;
    margin: auto;
    margin-top: 64px;
    padding: 40px;
    grid-gap: 40px;
    background: white;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 13px;
        margin-bottom: 84px;
    }
`;

export const Image = styled.img`
    width: 292px;
    height: 434px;
`;

export const Content = styled.div``;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 24px;
`;

export const SubTitle = styled.div`
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.darkerGrey};
    margin-bottom: 24px;
`;

export const Box = styled.span`
    display: flex;
`;

export const Label = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.stormGrey};
    margin-right: 10px;
    margin-bottom: 8px;
`;
export const Info = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
`;

export const Genres = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 16px -14px;
    padding-left: 0;
`;

export const Genre = styled.li`
    padding: 8px 16px;
    background: ${({ theme }) => theme.colors.mystic};
    color: ${({ theme }) => theme.colors.woodSmoke};
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;
    margin: 8px;
`;

export const Rate = styled.span`
    display: flex;
    align-items: center;
`;

export const RateBig = styled.div`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    margin-right: 8px;
    margin-left: 8px;
`;

export const RateLittle = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    margin-right: 8px;
`;

export const Vouters = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
`;

export const Desription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
`;
