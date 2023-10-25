import styled from 'styled-components';

export const StyledPagination = styled.div`
  padding: 14px 0;
  @media screen and (min-width: 768px) {
    padding: 14px 24px;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
  }

  button {
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
  }

  button.active {
    background-color: var(--pagination-color);

    opacity: ${props => (props.dataTheme === 'light' ? '100%' : '50%')};
  }
`;

export const StyledArrows = styled.button`
  width: 27px;
  height: 27px;
  fill: var(--text-color);
  opacity: 0.3;
  background-color: transparent;
  border: none;
  margin: 0 10px;
`;
