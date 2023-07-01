import styled from "styled-components";

export const PersonTileWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    margin: 56px 0px;
    padding: 40px;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0px 40px;
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.lightHeather};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    gap: 0 28px;
    grid-template-columns: minmax(auto, 215px) 1fr;
    padding: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: minmax(auto, 114px) 1fr;
    gap: 0 16px;
    padding: 16px;
  }
`;

export const PersonPhoto = styled.img`
    max-width: 400px;
    height: 564px;
    border-radius: 5px;
    grid-row: span 2 / auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 215px;
    height: 319px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;
export const PersonData = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-row: span 2;
  }
`;

export const PersonName = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin: 0 0 24px 0;
  word-break: break-word;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 24px;
    margin: 0 0 18px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    margin: 0 0 8px 0;
  }
`;

export const BasicInfo = styled.div`
  margin: 0px 0px 8px 0px;
  display: flex;
  flex-wrap: wrap;
`;

export const Birth = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.stormGrey};
  margin: 0px 10px 0px 0px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    margin: 0px 4px 0px 0px;
  }
`;

export const BirthDetails = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.woodsmoke};
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
  }
`;

export const Biography = styled.article`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.woodsmoke};
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 17px;
    padding-top: 10px;
    grid-row: 3;
    grid-column: span 2;
    margin-top: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    margin-top: 4px;
  }
`;