import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  margin: 0;
  justify-content: center;
  padding: 0;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

export const Bottom = styled.div`
    margin-top: 55px;
`;