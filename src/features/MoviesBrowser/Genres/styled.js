import styled from "styled-components";

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0px 0 39px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 8px 0 0 0;
  }

`;

export const Tag = styled.div`
  background-color: ${({ theme }) => theme.colors.mystic};
  padding: 8px 16px;
  border-radius: 5px;
  line-height: 1.4;
  display: flex;
  align-items: center;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

export const GenreName = styled.p`
  line-height: 3px;
  font-size: 14px;
  font-weight: 400;
  margin: 0px;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 10px;
  }
`;
