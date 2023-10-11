import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  @media screen and (min-width: 768px) {
    padding: 14px 24px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  color: var(--text-color);
  transition: background-color 0.5s;
  font-size: 12px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  font-style: normal;
  margin: 0 10px;
  cursor: pointer;
  &.active {
    color: var(--hover-txt-color);
    background-color: var(--pagination-color);
  }
`;

export const StyledArrows = styled.button`
  width: 27px;
  height: 27px;
  stroke: var(--text-color);
  opacity: 0.7;
  background-color: transparent;
  border: none;
  margin: 0 10px;
`;
