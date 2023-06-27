import styled from "styled-components";

export const Details = styled.article`
  color: ${({ theme }) => theme.colors.black};
  padding: 40px;
  display: grid;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.mystic};
  gap: 0 40px;
  grid-template-columns: minmax(auto, 312px) 1fr;
  grid-template-rows: auto 1fr;
  border-radius: 5px;
  margin-top: 64px;
  @media (max-width: ${({ theme }) => theme.breakpoint.fullPage}px) {
    padding: 28px;
    gap: 0 28px;
    grid-template-columns: minmax(auto, 215px) 1fr;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 16px;
    gap: 0 16px;
    grid-template-columns: minmax(auto, 114px) 1fr;
  }
`;

export const DetailsDescription = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.fullPage}px) {
    grid-row: span 2;
  }
`;

export const Overview = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  line-height: 160%;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.fullPage}px) {
    font-size: 17px;
    grid-row: 3;
    grid-column: span 2;
    margin-top: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    margin-top: 4px;
  }
`;