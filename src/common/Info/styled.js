import styled, { css } from "styled-components";

export const Title = styled.h2`
  margin: 16px 0 8px;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.fullPage}px) {
    font-size: 16px;
    margin: 0;
    -webkit-line-clamp: 4;
  }
`;

export const Subtitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.fullPage}px) {
    font-size: 13px;
  }
`;

export const TitleDetails = styled.h2`
  margin: 8px 0 24px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 0 0 8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: 500;
    line-height: 1.3;
    margin: 0 0 4px;
    font-size: 16px;
  }
`;

export const SubtitleDetails = styled.span`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    color: ${({ theme }) => theme.colors.darkerGrey};
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 8px 0;
  }
`;

export const Paragraph = styled.div`
  line-height: 1.2;
  display: inline-flex;
  gap: 10px;
  font-size: 18px;
`;

export const Attribute = styled.span`
  color: ${({ theme }) => theme.colors.stormGrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    ${({ mobile }) =>
      mobile &&
      css`
        display: none;
      `}
  }
`;

export const Value = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    line-height: 1.3;
  }
`;