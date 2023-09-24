import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-top: 40px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  & > *:not(:last-child) {
    margin-bottom: 28px;
  }

  @media (min-width: 768px) {
    & > *:not(:last-child) {
      margin-bottom: 0;
    }
    & {
      gap: 40px 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      gap: 80px 20px;
    }
  }
`;
