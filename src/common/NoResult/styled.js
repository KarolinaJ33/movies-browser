import styled from "styled-components";
import { ReactComponent as NoResult } from "./noResult.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoResultIcon = styled(NoResult)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 300px;
  }
`;