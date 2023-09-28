import styled from "styled-components";

export const Wrapper = styled.div`
margin-bottom: 40px;

    @media (min-width: 768px) {
        margin-bottom: 80px;
    }
     @media (min-width: 1028px) {
        margin-bottom: 88px;
    }
`;

export const Title = styled.h3`
color: #f3f3f3;
    font-size: 18px;
    font-weight: 500;
    line-height: calc(24 / 18);

    @media (min-width: 768px) {
        font-size: 24px;
        line-height: calc(32 / 24);
    }

@media (min-width: 1028px) {
        margin-top: 60px;
    }
`;