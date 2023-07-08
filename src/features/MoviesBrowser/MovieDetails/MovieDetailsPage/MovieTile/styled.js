import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 64px;
  display: grid;
  grid-template-columns: unset;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
        margin: 40px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 16px;
        margin-bottom: 0;
  }
`;

export const Container = styled.div`
    max-width: 1368px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
        grid-template-columns: 1fr 2fr;
        margin-bottom: 32px;
  }
`;

export const Image = styled.img`
    max-width: 312px;
    max-height: 464px;
    border-radius: 5px;
    margin: 40px;
    width: 30vw;
    grid-row: span 2;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
        margin: 28px 28px 0px;
        margin-bottom: 0;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        width: 114px;
        height: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px 40px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
        margin: 28px 28px 0px 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 16px;
  }
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    color: ${({ theme }) => theme.colors.black};
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
        font-size: 26px;
        line-height: 27px;
        font-weight: 500;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
        line-height: 21px;
  }
`;

export const SubTitle = styled.div`
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.black};
    margin-top: 24px;
    margin-bottom: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
        font-size: 18px;
        margin-top: 16px;
        line-height: 19px;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        margin-top: 4px;
        margin-bottom: 3px;
        color: ${({ theme }) => theme.colors.darkerGrey};
  }
`;

export const Box = styled.span`
    display: flex;
    flex-wrap: wrap;
    font-size: 18px;
    line-height: 21px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
    font-size: 15px;
    line-height: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    line-height: 16px;
  }

`;

export const Label = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.stormGrey};
    margin-right: 10px;
    margin-bottom: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
        font-size: 15px;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
  }
`;
export const Info = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    margin-bottom: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
        font-size: 15px;
  }
`;

export const Genres = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 24px 0px;
    padding-left: 0;
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
        gap: 8px;
        margin: 12px 0px;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        margin: 8px 0px;
  }
`;

export const Genre = styled.li`
    padding: 8px 16px;
    background: ${({ theme }) => theme.colors.mystic};
    color: ${({ theme }) => theme.colors.woodSmoke};
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
        font-size: 12px;
        padding: 6px 12px;
        gap: 8px;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
        padding: 4px 8px;
        line-height: 11px;
  }
`;

export const Rate = styled.span`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 16px;
`;

export const RateBig = styled.div`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    margin-right: 8px;
    margin-left: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const RateLittle = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    margin-right: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const Vouters = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.darkerGrey};
  }
`;

export const Desription = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  margin: 0px 40px 40px 0px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumPage}px) {
        grid-column: span 2;
        margin-top: 32px;
        margin-left: 28px;
        font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-column: span 2;
        font-size: 14px;
        line-height: 22px;
        margin: 16px;
  }
`;