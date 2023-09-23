import { styled } from 'styled-components';
import { ReactComponent as TrashIconImg } from '../../../assets/sprite.svg';

export const StyledDeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #161f37;
  transition: background-color 0.3s ease;

  @media (min-width: 768px) {
    width: 54px;
    height: 54px;
  }

  &:hover,
  &:active {
    background-color: #253e68;
  }
`;

export const TrashIcon = styled(TrashIconImg)`
  fill: transparent;
  stroke: transparent;
`;
