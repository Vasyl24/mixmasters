import { styled } from 'styled-components';

export const StyledDeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 40px;
  border: none;
  background-color: var(--accent-color);
  transition: background-color 0.3s ease;
  margin-left: 8px;

  @media (min-width: 768px) {
    width: 54px;
    height: 54px;
  }

  &:hover,
  &:active {
    background-color: var(--text-btn-color);
  }

  &:hover svg,
  &:active svg {
    stroke: var(--accent-color);
    fill: var(--text-btn-color);
  }
`;

export const TrashIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--text-btn-color);
  fill: var(--accent-color);
`;
