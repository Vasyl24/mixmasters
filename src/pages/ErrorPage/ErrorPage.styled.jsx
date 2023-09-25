import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  /*min-height: 100vh;*/
  margin: 0 auto;
  /*padding-top: 200px;*/
  padding-bottom: 139px;

  @media screen and (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 170px;
  }
`;

export const NotFoundWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const MainTitle = styled.div`
  text-align: center;
`;


