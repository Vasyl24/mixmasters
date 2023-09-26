import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
  max-width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
