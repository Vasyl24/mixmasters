import styled from 'styled-components';
import Select from 'react-select';

export const StyledFilterContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 60px;
    display: flex;
    & > *:not(:last-child) {
      margin-right: 8px;
    }
  }
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
  }

  & > *:not(:last-child) {
    margin-bottom: 14px;
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }
`;

export const StyledTextInput = styled.input`
  color: var(--text-color);
  font-size: 17px;
  font-weight: 400;
  line-height: 2.6;

  width: 100%;
  height: 54px;

  border-radius: 200px;
  border: 1px solid var(--text-color);
  opacity: 0.8;
  background-color: inherit;

  padding: 14px 24px;

  &::placeholder {
    color: var(--text-color);
    text-align: left;

    font-size: 17px;

    font-weight: 400;
    line-height: 2.6;
  }

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
  }
`;

export const StyledSelectInput = styled(Select)`
  .Select__control {
    width: 100%;
    height: 54px;
    background-color: var(--image-wrapper-color);
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;
    padding: 0 18px;
    font-size: 17px;
    color: var(--hover-txt-color);
    font-weight: 400;
    line-height: 2.6;

    @media screen and (min-width: 768px) {
      width: 199px;
      height: 56px;
    }
  }

  svg {
    transform: rotate(0deg);
    transition: transform 500ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
  }
  .Select__placeholder {
    color: var(--hover-txt-color);
  }
  .Select__control--menu-is-open {
    svg {
      transform: rotate(-180deg);
    }
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    background-color: var(--list-color);
    border-radius: 20px;
    padding-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .Select__option {
    color: var(--text-color);
    opacity: 0.4;
    background-color: transparent;
  }
  .Select__option:hover {
    background-color: transparent;
    opacity: 1;
  }
  .Select__single-value {
    color: var(--hover-txt-color);
  }

  .Select__menu-list::-webkit-scrollbar {
    width: 8px;
    height: 300px;
  }
  .Select__menu-list::-webkit-scrollbar-track {
    background: transparent;
  }
  .Select__menu-list::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb-color);
    border-radius: 20px;
    height: 110px;
  }
  /* .Select__menu-list::-webkit-scrollbar-thumb:hover {
    background: #434d67;
  } */
`;
