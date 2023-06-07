import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    margin: auto;
    padding: 40px;
    grid-gap: 40px;
`;

export const Image = styled.img`
    width: 292px;
    height: 434px;
`;

export const Content = styled.div``;

export const Title = styled.header`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    color: "#000000";
`;

export const Year = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: "#7E839A";
`;
