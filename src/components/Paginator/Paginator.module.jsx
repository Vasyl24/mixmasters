import styled from 'styled-components';

export const StyledPagination = styled.div`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 140px;
  }

  li {
  }

  button {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    color: #f3f3f3;
    transition: background-color 0.5s;
    font-size: 12px;
    font-weight: 500;
    background-color: inherit;
    border: none;
    font-style: normal;
    margin: 0 10px;
  }

  button.active {
    background-color: rgba(64, 112, 205, 0.5);
  }
`;
