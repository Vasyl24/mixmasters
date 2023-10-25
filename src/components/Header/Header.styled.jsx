import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid var(--border-icon-color);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  column-gap: 14px;

  @media (min-width: 768px) {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 32px;
    column-gap: 24px;
  }

  @media (min-width: 1440px) {
    justify-content: space-between;
    width: 1440px;
    padding: 20px 100px;
    column-gap: 28px;
  }
`;
