import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 20px 32px;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
    padding: 20px;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 22px;
    padding-bottom: 22px;
  }
`;
