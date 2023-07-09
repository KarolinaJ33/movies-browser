import styled from "styled-components";

import { ReactComponent as Star } from "../../../../../common/images/star.svg";

export const BackdropWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    transition: 1s;
`;
export const BackdropContainer = styled.div`
    position: relative;
    max-width: 1368px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;

    @media (max-width: ${({ theme }) => theme.breakpoint.fullPage}) {
        margin: 0 6px;
    }
`;
export const Pleksa = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
            270deg,
            #000000 14.11%,
            rgba(0, 0, 0, 0.873268) 15.08%,
            rgba(0, 0, 0, 0.720529) 16.51%,
            rgba(0, 0, 0, 0.294577) 19.99%,
            rgba(0, 0, 0, 0.159921) 21.88%,
            rgba(0, 0, 0, 0) 25.68%
        ),
        linear-gradient(
            90deg,
            #000000 13.6%,
            rgba(0, 0, 0, 0.984059) 14.58%,
            rgba(0, 0, 0, 0.967732) 15.44%,
            rgba(0, 0, 0, 0.865569) 16.3%,
            rgba(0, 0, 0, 0.230315) 22.87%,
            rgba(0, 0, 0, 0) 26.64%
        ),
        linear-gradient(
            180deg,
            #000000 0%,
            rgba(0, 0, 0, 0.689555) 4.66%,
            rgba(0, 0, 0, 0.439033) 9.34%,
            rgba(0, 0, 0, 0.20628) 15.16%,
            rgba(0, 0, 0, 0) 24.22%
        ),
        linear-gradient(
            189.44deg,
            rgba(0, 0, 0, 0) 58.48%,
            rgba(0, 0, 0, 0.106473) 63.17%,
            rgba(0, 0, 0, 0.235359) 68.85%,
            rgba(0, 0, 0, 0.492821) 78.08%,
            rgba(0, 0, 0, 0.740286) 85.86%,
            #000000 92.87%
        );
`;

export const BackdropImage = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const InfoContainer = styled.div`
    padding-left: 25px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    position: absolute;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.black};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding-left: 16px;
    }
`;

export const LongTitle = styled.header`
    font-weight: 600;
    font-size: 64px;
    margin-bottom: 5px;
    margin-top: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
        font-size: 48px;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 24px;
  }
`;

export const Rating = styled.div`
    margin-bottom: 18px;
    display: grid;
    grid-template-columns: repeat(4, max-content);
    grid-gap: 17px 8px;
    align-items: end;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        align-items: center;
        margin: 0 8px 0 0;
    }
`;

export const StarIcon = styled(Star)`
    width: 40px;
    height: 38px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
        width: 32px;
        height: 31px;
  }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 16px;
        height: 16px;
  }
`;

export const RateBig = styled.span`
    font-weight: 500;
    font-size: 30px;
    line-height: 100%;
    margin: 3px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
    font-size: 22px;
    line-height: 26px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const RateSmall = styled.span`
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
    }
`;

export const Votes = styled.span`
    margin-left: 0;
    grid-row: 2;
    grid-column: 1 / 5;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
  }
`;
