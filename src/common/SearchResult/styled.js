import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px;
`;

export const Info = styled.span`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.woodSmoke};
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: ${({ theme }) => theme.colors.woodSmoke};
        margin-bottom: 12px;
    }
`;

export const ResultList = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-gap: 24px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(8, 1fr);
grid-gap: 0 16px;
}
`;
