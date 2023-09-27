import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 32px;
  }

  @media (min-width: 1440px) {

    width: 1440px;

    padding: 20px 100px;

  }
`;