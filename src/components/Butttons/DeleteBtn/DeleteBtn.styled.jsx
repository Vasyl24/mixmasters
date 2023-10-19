import { styled } from 'styled-components';

export const StyledDeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 40px;
  border: none;
  background-color: var(--btn-background-color);
  margin-left: 8px;

  @media (min-width: 768px) {
    width: 54px;
    height: 54px;
  }

  &:hover,
  &:active {
    background-color: var(--hover-btn-color);
  }

  &:hover svg,
  &:active svg {
    stroke: var(--hover-txt-color);
    fill: var(--hover-btn-color);
  }
`;

export const TrashIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--hover-txt-color);
  fill: var(--btn-background-color);
`;
